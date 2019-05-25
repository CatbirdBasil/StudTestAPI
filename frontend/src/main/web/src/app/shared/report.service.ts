import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Report} from "@models/report";
import {GET_REPORT_URL} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) {
  }


  public getTour(dates: Date[], serviceType: string): Observable<Report[]> {

    return this.http.post<Report[]>(`${GET_REPORT_URL}` + serviceType, dates); // any[]
  }


}


