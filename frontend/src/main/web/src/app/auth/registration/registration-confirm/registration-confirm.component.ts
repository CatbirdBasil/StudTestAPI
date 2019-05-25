import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RegConfirmResponse} from "@models/regConfirmResponse";
import {REGISTRATION_CONFIRM_URL} from "@environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-registration-confirm',
  templateUrl: './registration-confirm.component.html',
  styleUrls: ['./registration-confirm.component.scss']
})
export class RegistrationConfirmComponent implements OnInit, AfterContentInit {

  public regConfirmResponse: RegConfirmResponse;

  token: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private aRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.token = this.aRoute.snapshot.paramMap.get("token");
    window.scrollTo(0, 0);
    window.setTimeout(() => {
      this.router.navigate(['login']);
    }, 10000);
  }

  ngAfterContentInit() {
    this.http.get<RegConfirmResponse>(REGISTRATION_CONFIRM_URL + this.token).subscribe(
      data => {
        this.regConfirmResponse = data;
      }, err => {
        alert(err);
      });
  }

}
