import {Injectable} from '@angular/core';
import {
  CREATE_OR_UPDATE_TRIP_URL,
  GET_ALL_TRIPS,
  GET_ALL_TRIPS_FOR_CURRENT_USER,
  GET_ALL_TRIPS_SORTED_BY_IMG,
  GET_ALL_TRIPS_WITH_DETAIL,
  GET_SERVICES_BY_PROVIDER_ID,
  GET_TRIP_BY_ID,
  GET_TRIP_BY_PROVIDER_ID
} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Trip} from "@models/trip";
import {Service} from "@models/service";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {
  }

  createOrUpdateTrip(tripPayload: Trip) {
    return this.http.post<Trip>(`${CREATE_OR_UPDATE_TRIP_URL}`, tripPayload);
  }

  getAllTrips() {
    return this.http.get<Trip[]>(`${GET_ALL_TRIPS}`);
  }

  getAllByProviderId(id: number) {
    return this.http.get<Trip[]>(`${GET_TRIP_BY_PROVIDER_ID}` + id);
  }

  getAllTripsForCurrentUser() {
    return this.http.get<Trip[]>(`${GET_ALL_TRIPS_FOR_CURRENT_USER}`);
  }

  getTripById(id: number) {
    return this.http.get<Trip>(`${GET_TRIP_BY_ID}` + id);
  }

  getAllTripSortedByImg() {
    return this.http.get<Trip[]>(`${GET_ALL_TRIPS_SORTED_BY_IMG}`);
  }

  getAllTripsWithDetails() {
    return this.http.get<Trip[]>(`${GET_ALL_TRIPS_WITH_DETAIL}`);
  }

  getAvailableServices() {
    return this.http.get<Service[]>(`${GET_SERVICES_BY_PROVIDER_ID}`);
  }
}
