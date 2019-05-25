import {Component, OnInit} from '@angular/core';
import {Trip} from "@models/trip";
import {TripService} from "@services/trip.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TableSettings} from "@models/table-settings.model";
import {AuthService} from "@services/auth.service";

@Component({
  selector: 'app-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.scss']
})
export class UserTripsComponent implements OnInit {

  tableName = 'Trips';
  trips: Trip[];
  editable = true;
  deleting = false;

  showTable = true;

  url = "/trip/";

  tripsTableSettings: TableSettings[] =
    [
      {
        propertyName: 'name'
      },
      {
        propertyName: 'status'
      },
      {
        propertyName: 'locationCity'
      },
      {
        propertyName: 'destinationCity'
      },
      // {
      //   propertyName: 'location',
      //   type: 'location'
      // },
      // {
      //   propertyName: 'destination',
      //   type: 'location'
      // },
      {
        propertyName: 'numberOfPeople'
      }
      ,
      {
        propertyName: 'price',
        type: 'currency'
      }
    ];

  constructor(private usersService: TripService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
  }

  get isProvider() {
    return "ROLE_PROVIDER"
  }

  ngOnInit() {
    this.trips = this.route.snapshot.data.tripData;

    this.trips.forEach((trip) => {
      trip.locationCity = trip.location.name;
      trip.destinationCity = trip.destination.name;
    })
  }

  info(event) {
    this.router.navigate(['trip/' + event])
    // .then(result => {
    // window.open('/#/trip/' + event, '_blank');
    // })
    ;
  }

  switchMode() {
    this.showTable = !this.showTable;
  }
}
