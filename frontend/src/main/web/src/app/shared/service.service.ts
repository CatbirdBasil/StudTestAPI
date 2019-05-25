import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {
  CHANGE_STATUS_APPROVER,
  CHANGE_STATUS_PROVIDER,
  GET_PURCHASED_SERVICES,
  GET_SERVICE_MESSAGE,
  POST_CLARIFICATION_REQUEST,
} from "@environments/environment";
import {ServiceMessage} from "@models/service.message";
import {Trip} from "@models/trip";
import {Service} from "@models/service";

@Injectable({
  providedIn: 'root'
})

export class ServiceService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  getServiceMessage(id: number) {
    return this.http.get<ServiceMessage>(`${GET_SERVICE_MESSAGE}` + id);
  }

  changeStatusByApprover(trip: Trip, statusId: number) {
    return this.http.put(`${CHANGE_STATUS_APPROVER}`, {"service": trip, "statusId": statusId});
  }

  changeStatusByProvider(trip: Trip, statusId: number) {
    return this.http.put(`${CHANGE_STATUS_PROVIDER}`, {"service": trip, "statusId": statusId});
  }

  sendServiceMessage(trip: Trip, message: string) {
    return this.http.post(`${POST_CLARIFICATION_REQUEST}`, {"service": trip, "message": message});
  }

  getPurchasedServices() {
    return this.http.get<Service[]>(`${GET_PURCHASED_SERVICES}`);
  }
}
