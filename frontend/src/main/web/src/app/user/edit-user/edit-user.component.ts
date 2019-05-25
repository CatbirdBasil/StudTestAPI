import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "@helpers/must-mutch.validator";
import {User} from "@models/user";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "@services/users.service";
import {SnackbarComponent} from "@models/snackbar/snackbar.component";
import {ShareDataService} from "@services/share-data.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  changePasswordForm: FormGroup;
  submittedEditing = false;
  submittedPasswordChanging = false;

  error: string = null;

  currentUser: User;
  private newUser: User;
  oldPassword: string;

  isDisabled: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private userService: UsersService,
              private shareDataService: ShareDataService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      data => {
        this.currentUser = data;
        this.newUser = data;
      }, err => {
        alert(err);
      });

    this.editUserForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(128)]],
    });
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(128)]],
      newPasswordConfirm: ['', [Validators.required]],
    }, {
      validator: MustMatch('newPassword', 'newPasswordConfirm')
    });
  }

  get userDataForm() { return this.editUserForm.controls; }
  get passwordForm() { return this.changePasswordForm.controls; }

  updateUser() {
    this.isDisabled = true;
    this.submittedEditing = true;

    if (!this.editUserForm.controls.username.value.trim()) {
      this.editUserForm.controls.username.setValue(this.currentUser.username);
    }
    if (!this.editUserForm.controls.firstName.value.trim()) {
      this.editUserForm.controls.firstName.setValue(this.currentUser.details.firstName);
    }
    if (!this.editUserForm.controls.lastName.value.trim()) {
      this.editUserForm.controls.lastName.setValue(this.currentUser.details.lastName);
    }
    if (!this.editUserForm.controls.email.value.trim()) {
      this.editUserForm.controls.email.setValue(this.currentUser.email);
    }

    this.newUser.username = this.editUserForm.controls.username.value.trim();
    this.newUser.details.firstName = this.editUserForm.controls.firstName.value.trim();
    this.newUser.details.lastName = this.editUserForm.controls.lastName.value.trim();
    this.newUser.email = this.editUserForm.controls.email.value.trim();

    if (this.editUserForm.invalid) {
      this.isDisabled = false;
      return;
    }

    return this.userService.updateSummary(this.newUser).subscribe(() => {
      this.router.navigate(['account']);
      this.openSnackBar("Account edited successfully");
      this.isDisabled = false;
    })
  }

  changePassword() {
    this.isDisabled = true;
    this.submittedPasswordChanging = true;

    this.newUser.password = this.changePasswordForm.controls.newPassword.value;
    this.oldPassword = this.changePasswordForm.controls.oldPassword.value;

    if (this.changePasswordForm.invalid) {
      return;
    }

    return this.userService.changePassword(this.newUser, this.oldPassword).subscribe(() => {
      this.router.navigate(['account']);
      this.openSnackBar("Password changed successfully");
      this.isDisabled = false;
    }, err => {
      this.isDisabled = false;
      this.error = err;
      setTimeout(() => {
        this.error = null;
      }, 5000);
    })
  }

  openSnackBar(message: string) {
    this.shareDataService.snackBarMessage = message;
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000
    })
  }
}
