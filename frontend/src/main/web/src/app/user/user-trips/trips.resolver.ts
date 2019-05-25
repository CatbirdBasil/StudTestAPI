import {Resolve} from '@angular/router';
import {Injectable} from "@angular/core";
import {TripService} from "@services/trip.service";
import {Observable} from "rxjs";
import {Trip} from "@models/trip";

@Injectable()
export class TripsResolver implements Resolve<any> {

  constructor(private  tripService: TripService) {
  }

  resolve(): Observable<Trip[]> {
    return this.tripService.getAllTripsForCurrentUser();
  }
}
