import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "@services/auth.service";
import {ShareDataService} from "@services/share-data.service";
import {MatSnackBar} from "@angular/material";
import {SnackbarComponent} from "@models/snackbar/snackbar.component";

@Component({
  selector: 'app-user-users',
  templateUrl: './user-users.component.html',
  styleUrls: ['./user-users.component.scss']
})
export class UserUsersComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;
  selectedVal: string = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private shareDataService: ShareDataService,
              private snackBar: MatSnackBar,
              private authService: AuthService) {
  }

  get f() {
    return this.registrationForm.controls;
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(128)]],
      role: [''],
    });

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
      "password": "123456",
      "role": "ROLE_" + this.f.role.value
    };


    this.authService.registrationSpecUser(registrationPayload).subscribe(
      () => {
        this.openSnackBar("New " + this.f.role.value + " registered successfully");
        this.router.navigate(['login']);
      }, err => {
        this.error = err;
        this.loading = false;
        window.setTimeout(() => {
          this.error = '';
        }, 5000);
      }
    );
  }

  selectChangeHandler(event: any) {
    //update the ui
    this.selectedVal = event.target.value;
  }

  openSnackBar(message: string) {
    this.shareDataService.snackBarMessage = message;
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000
    })
  }
}
