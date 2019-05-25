import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GET_SUB_COUNT_FOR_PROVIDER, SUBSCRIBE_BY_ID} from "@environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) {
  }

  isSubscribed(id: number) {
    return this.http.get<boolean>(`${SUBSCRIBE_BY_ID}` + id);
  }

  unsubscribeToProvider(id: number) {
    return this.http.delete(`${SUBSCRIBE_BY_ID}` + id);
  }

  subscribeToProvider(subscribePayload) {
    return this.http.post<any>(`${SUBSCRIBE_BY_ID}`, subscribePayload).pipe(
      map(data => {
          return data;
        }
      ));
  }

  getSubscriptionCount(id: number) {
    return this.http.get<number>(`${GET_SUB_COUNT_FOR_PROVIDER}` + id);
  }

}
