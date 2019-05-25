import {TripService} from "../shared/trip.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Trip} from "@models/trip";

@Injectable()
export class TripResolver implements Resolve<any> {

  constructor(private  tripService: TripService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Trip> {
    return this.tripService.getTripById(+route.paramMap.get('id'));
  }
}
