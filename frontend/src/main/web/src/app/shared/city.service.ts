import {Injectable} from '@angular/core';
import {GET_CITIES_BY_COUNTRY_ID} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {City} from "@models/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {
  }

  getCitiesByCountryId(id: number) {
    return this.http.get<City[]>(`${GET_CITIES_BY_COUNTRY_ID}` + id);
  }

}
