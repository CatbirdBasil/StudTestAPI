import {Injectable} from '@angular/core';
import {
  GET_ALL_COUNTRIES,
  GET_SEARCHED_TRIPS_BY_BUNDLE,
  GET_SEARCHED_TRIPS_BY_DISCOUNT,
  GET_SEARCHED_TRIPS_BY_LENGTH,
  GET_SEARCHED_TRIPS_BY_PRICE,
  GET_SEARCHED_TRIPS_BY_PROVIDER,
  GET_SEARCHED_TRIPS_BY_RATING
} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Country, SearchTrip, SearchTripMultiple} from "@models/tripSearch";
import {Trip} from "@models/trip";


@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) {
  }

  getAllCountries() {
    return this.http.get<Country[]>(`${GET_ALL_COUNTRIES}`);
  }

  getSearchByRating(tripSearch: SearchTrip) {
    return this.http.post<Trip[]>(`${GET_SEARCHED_TRIPS_BY_RATING}`, tripSearch);
  }

  getSearchByProvider(tripSearch: SearchTrip) {
    return this.http.post<Trip[]>(`${GET_SEARCHED_TRIPS_BY_PROVIDER}`, tripSearch);
  }

  getSearchByDiscount(tripSearch: SearchTrip) {
    return this.http.post<Trip[]>(`${GET_SEARCHED_TRIPS_BY_DISCOUNT}`, tripSearch);
  }

  getSearchByPrice(tripSearch: SearchTripMultiple) {
    return this.http.post<Array<Trip[]>>(`${GET_SEARCHED_TRIPS_BY_PRICE}`, tripSearch);
  }

  getSearchByLength(tripSearch: SearchTripMultiple) {
    return this.http.post<Array<Trip[]>>(`${GET_SEARCHED_TRIPS_BY_LENGTH}`, tripSearch);
  }

  getSearchByBundle(tripSearch: SearchTripMultiple) {
    return this.http.post<Array<Trip[]>>(`${GET_SEARCHED_TRIPS_BY_BUNDLE}`, tripSearch);
  }


}
