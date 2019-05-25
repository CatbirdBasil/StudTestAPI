import {Injectable} from '@angular/core';
import {GET_ALL_COUNTRIES} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Country} from "@models/country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {
  }

  getAllCountries() {
    return this.http.get<Country[]>(`${GET_ALL_COUNTRIES}`);
  }

}
