import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "@models/user";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "@services/users.service";

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.scss']
})
export class UserSummaryComponent implements OnInit {
  public currentUser: User;

  constructor(private router: Router,
              private http: HttpClient,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUserSummary().subscribe(data => {
      this.currentUser = data;
    }, err => {
      alert(err);
    });
  }

  editUser() {
    this.router.navigate(['account/edit']);
  }

  /*deleteUserById() {
    this.router.navigate(['account/delete']);
  }*/
}
