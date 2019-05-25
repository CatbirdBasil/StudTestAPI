import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Trip} from "@models/trip";
import {AuthService} from "../shared/auth.service";
import {FeedbackService} from "@services/feedback.service";
import {Feedback} from "@models/feedback";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ViewService} from "@services/view.service";
import {Md5} from 'ts-md5/dist/md5';
import {GRAVATAR_BASE_URL} from "@environments/environment";
import {SnackbarComponent} from "@models/snackbar/snackbar.component";
import {ShareDataService} from "@services/share-data.service";
import {MatSnackBar} from "@angular/material";
import {Role} from "@models/role";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit, OnDestroy {

  trip: Trip;

  isDisabled: boolean = false;

  feedbackForm: FormGroup;
  loading = false;

  userId: string;
  // userId: number;
  authority: string;
  username: string;
  imgSrc: string;

  feedback: Feedback[];
  isFeedbackAllowed: boolean;
  isFeedbackGiven: boolean;

  views: number;
  navigationSubscription;
  currentRating: number;

  constructor(private route: ActivatedRoute,
              private feedbackService: FeedbackService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private viewService: ViewService,
              private router: Router,
              private shareDataService: ShareDataService,
              private snackBar: MatSnackBar) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.trip = this.route.snapshot.data.tripData;

    this.route.params.subscribe(params => {
      this.feedbackService.getTripFeedback(params['id']).subscribe(data => {
        this.feedback = data;

        this.calculateCurrentRating();

        if (this.authService.token != null) {
          this.userId = this.authService.currentId;
          // this.userId = this.authService.getDecodedToken().sub;
          this.userId = this.authService.currentId;
          this.checkIfFeedbackGiven();
        }

        if (this.isFeedbackGiven) {
          this.initFeedbackFormWithData(this.feedback
            .find((message: Feedback) => message.userId == +this.userId))
        } else {
          this.initFeedbackForm()
        }
      }, err => {
        alert(err);
      });

      if (this.authService.token != null) {
        this.feedbackService.checkUserFeedbackAbility(params['id']).subscribe(data => {
          this.isFeedbackAllowed = data;
        }, err => {
          alert(err);
        });
      }

      this.viewService.countViewByTripId(params['id']).subscribe(data => {
        this.views = data;
      }, err => {
        alert(err);
      });
    });

    if (this.authService.isSignedIn != null) {
      // this.authority = this.authService.getDecodedToken().authority;
      // this.authority = this.authService.getDecodedToken().authority;
      this.authority = "USER_ROLE";
      this.username = this.authService.currentUsername;
      // this.username = this.authService.getDecodedToken().username;
    }

    if (this.authority === Role.User) {
      this.viewService.addFeedback(this.trip.id).subscribe(
        () => {
        },
        err => {
          alert(err);
        }
      );
    }
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

  extractDateString(date: number) {
    return (new Date(date)).toLocaleDateString();
  }

  calculateCurrentRating() {

    let sum: number = 0;

    for (let message of this.feedback) {
      sum += message.rating;
    }

    this.currentRating = sum / this.feedback.length;
  }

  checkIfFeedbackGiven() {
    for (let message of this.feedback) {
      if (message.userId == +this.userId) {
        this.isFeedbackGiven = true;
        return;
      }
    }
    this.isFeedbackGiven = false;
  }

  discountedPrice(price: number, type: string, amount: number): number {
    if (type === 'Fixed discount') {
      return price - amount;
    } else if (type === 'Percentage') {
      return price - (price * (amount / 100));
    } else return price;
  }

  checkDiscount(startDate: number, endDate: number): boolean {
    let currDate = new Date(Date.now());
    return (currDate <= new Date(endDate) && currDate >= new Date(startDate));
  }

  addFeedback(feedbackPayload: Feedback) {
    this.loading = true;

    this.imgSrc = this.getGravatarLink(this.getUserEmailHash());

    feedbackPayload.feedbackDate = Date.now();

    this.feedbackService.addFeedback(feedbackPayload).subscribe(data => {
      this.feedback.push(feedbackPayload);
      this.calculateCurrentRating();
      this.loading = false;
      this.isFeedbackGiven = true;
      this.openSnackBar("Feedback added")
    }, err => {
      this.loading = false;
      alert(err);
    });
  }

  updateFeedback(feedbackPayload: Feedback) {
    this.loading = true;

    this.feedbackService.updateFeedback(feedbackPayload).subscribe(data => {

      for (let message of this.feedback) {
        if (message.id == feedbackPayload.id) {
          message.feedbackMessage = feedbackPayload.feedbackMessage;
          message.rating = feedbackPayload.rating;
          break;
        }
      }

      this.calculateCurrentRating();
      this.loading = false;
    }, err => {
      this.loading = false;
      alert(err);
    });
  }

  removeFeedback(feedbackPayload: Feedback) {
    this.loading = true;

    this.feedbackService.deleteFeedback(feedbackPayload.id).subscribe(data => {

      for (let i = 0; i < this.feedback.length; i++) {
        if (this.feedback[i].id == feedbackPayload.id) {
          if (i > -1) {
            this.feedback.splice(i, 1);
          }
          break;
        }
      }

      this.isFeedbackGiven = false;
      this.calculateCurrentRating();
      this.loading = false;
      this.openSnackBar("Feedback removed");
    }, err => {
      this.loading = false;
      alert(err);
    });
  }

  initFeedbackForm() {
    this.feedbackForm = this.formBuilder.group({
      id: [0],
      userId: [0],
      serviceId: [this.trip.id],
      rating: [0, [Validators.min(1), Validators.max(5)]],
      feedbackDate: [Date.now()],
      feedbackMessage: ['', [Validators.minLength(3), Validators.maxLength(2048)]]
    });
  }

  initFeedbackFormWithData(feedbackPayload: Feedback) {
    this.feedbackForm = this.formBuilder.group({
      id: [feedbackPayload.id],
      userId: [feedbackPayload.userId],
      serviceId: [this.trip.id],
      rating: [feedbackPayload.rating, [Validators.min(1), Validators.max(5)]],
      feedbackDate: [feedbackPayload.feedbackDate],
      feedbackMessage: [feedbackPayload.feedbackMessage, [Validators.minLength(3), Validators.maxLength(2048)]]
    });
  }

  updateTripData(newTrip: Trip) {
    this.trip = newTrip;
  }

  getUserEmailHash(): string {
    // let email = this.authService.getDecodedToken().email;
    let email = this.authService.currentEmail;

    return Md5.hashStr(email.trim().toLowerCase()).toString();
  }

  getGravatarLink(hash: string) {
    return GRAVATAR_BASE_URL + hash;
  }

  openSnackBar(message: string) {
    this.shareDataService.snackBarMessage = message;
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000
    })
  }
}
