import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@services/auth.service";
import {Router} from "@angular/router";
import {MustMatch} from "@helpers/must-mutch.validator";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.isSignedIn) {
    // if (this.authService.currentUserValue) {
      this.router.navigate(['']);
    }
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(128)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(128)]],
      passwordConfirm: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'passwordConfirm')
    });
    window.scrollTo(0, 0);
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    this.loading = true;

    const registrationPayload = {
      "firstName": this.registrationForm.controls.firstName.value.trim(),
      "lastName": this.registrationForm.controls.lastName.value.trim(),
      "username": this.registrationForm.controls.username.value.trim(),
      "email": this.registrationForm.controls.email.value.trim(),
      "password": this.registrationForm.controls.password.value,
      "confirmpassword": this.registrationForm.controls.password.value,
      "role": "ROLE_USER"
    };

    this.authService.registration(registrationPayload).subscribe(
      () => {
        this.router.navigate(['registrationSuccessful']);
      }, err => {
        this.error = err;
        this.loading = false;
        window.setTimeout(() => {
          this.error = '';
        }, 10000);
      }
    );
  }
}

