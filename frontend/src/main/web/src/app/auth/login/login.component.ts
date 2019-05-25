import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  loading = false;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    // if (this.authService.currentUserValue) {
    if (this.authService.isSignedIn) {
      this.router.navigate(['']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });


    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    window.scrollTo(0, 0);
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const loginPayload = {
      "username": this.f.username.value.trim(),
      // "usernameOrEmail": this.f.username.value.trim(),
      "password": this.f.password.value.trim(),
      "grant_type":"password"
    };

    this.authService.login(loginPayload).pipe(first()).subscribe(
      () => {
        this.router.navigate(['account']);
      }, err => {
        this.error = err;
        this.loading = false;
        setTimeout(() => {
          this.error = '';
        }, 5000);
      }
    )
  }
}


