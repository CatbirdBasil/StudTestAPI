import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {
  CHANGE_PASSWORD_SUMMARY,
  DELETE_USER_BY_ID,
  EDIT_SUMMARY,
  GET_ALL_USERS,
  GET_CURRENT_USER,
  GET_USER_BY_ID
} from "@environments/environment";
import {User} from "@models/user";

@Injectable({
  providedIn: 'root'
})

export class UsersService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  getAllUsers() {
    return this.http.get<User[]>(`${GET_ALL_USERS}`);
  };

  deleteUserById(id: number) {
    return this.http.delete(`${DELETE_USER_BY_ID}` + id);
  }

  getUserSummary() {
    return this.http.get<User>(`${GET_CURRENT_USER}`);
  }

  getUserSummaryById(id: number) {
    return this.http.get<User>(`${GET_USER_BY_ID}` + id);
  }

  updateSummary(user: User) {
    return this.http.put<any>(`${EDIT_SUMMARY}`, user);
  }

  changePassword(user: User, oldPassword) {
    return this.http.put<any>(`${CHANGE_PASSWORD_SUMMARY}`, {"user": user, "oldPassword": oldPassword});
  }

  getCurrentUser() {
    return this.http.get<User>(`${GET_CURRENT_USER}`);
  }
}
