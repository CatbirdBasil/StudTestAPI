import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {title} from "@environments/environment";
import {AuthService} from "@services/auth.service";
import {LoadingService} from "@services/loading.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  loadingSubscription: Subscription;

  public constructor(private titleService: Title,
                     private authService: AuthService,
                     private loadingService: LoadingService) {
    this.setTitle(title);
    // if (!authService.currentUserValue || authService.isTokenExpired()) {
    if (!authService.isSignedIn || authService.isTokenExpired()) {
      authService.logout();
    }
  }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.test.subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
