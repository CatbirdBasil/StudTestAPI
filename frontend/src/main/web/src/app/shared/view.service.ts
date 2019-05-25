import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {COUNT_VIEWS_BY_TRIP_ID, VIEW_CONTROLLER} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http: HttpClient) {
  }

  addFeedback(serviceId: number) {
    return this.http.post<any>(`${VIEW_CONTROLLER}`, serviceId);
  }

  countViewByTripId(tripId: number) {
    return this.http.get<number>(`${COUNT_VIEWS_BY_TRIP_ID}` + tripId);
  }
}
