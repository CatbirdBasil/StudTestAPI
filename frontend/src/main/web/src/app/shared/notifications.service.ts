import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notification} from "@models/notification";
import {
  GET_ALL_NOT_READ_NOTIFICATION_FOR_APPROVER,
  GET_ALL_NOT_READ_NOTIFICATION_FOR_PROVIDER,
  GET_ALL_NOT_READ_NOTIFICATION_FOR_USER
} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {


  constructor(private http: HttpClient) {
  }

  getAllNotReadNotificationsForApprover(id: number) {
    return this.http.get<Notification[]>(`${GET_ALL_NOT_READ_NOTIFICATION_FOR_APPROVER}` + id);
  }

  getAllNotReadNotificationsForProvider(id: number) {
    return this.http.get<Notification[]>(`${GET_ALL_NOT_READ_NOTIFICATION_FOR_PROVIDER}` + id);
  }

  getAllNotReadNotificationsForUser(id: number) {
    return this.http.get<Notification[]>(`${GET_ALL_NOT_READ_NOTIFICATION_FOR_USER}` + id);
  }
}
