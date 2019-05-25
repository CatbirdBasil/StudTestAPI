import {BrowserModule, Title} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './system/header/header.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IndexComponent} from './system/index/index.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {EditUserComponent} from './user/edit-user/edit-user.component';
import {routing} from "./app.routing";
import {UserComponent} from './user/user.component';
import {JwtInterceptor} from "@helpers/jwt.interceptor";
import {HttpErrorInterceptor} from "@helpers/HttpError.interceptor";
import {UserSummaryComponent} from './user/user-summary/user-summary.component';
import {UserUsersComponent} from './user/user-users/user-users.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {UserTripsComponent} from './user/user-trips/user-trips.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './user/admin-dashboard/admin.dashboard.component';
import {LayoutModule} from '@angular/cdk/layout';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {RegistrationSuccessfulComponent} from "./auth/registration/registration-successful/registration-successful.component";
import {MaterialModule} from "@helpers/material.module";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {SuggestionServiceComponent} from './user/user-trips/suggestion-service/suggestion-service.component';
import {TripSuggestionComponent} from './user/user-trips/trip-suggestion/trip-suggestion.component';

import {TripFormComponent} from './user/user-trips/trip-form/trip-form.component';
import {TripsResolver} from "./user/user-trips/trips.resolver";
import {TripComponent} from './trip/trip.component';
import {TripResolver} from "./trip/trip.resolver";
import {RegistrationConfirmComponent} from './auth/registration/registration-confirm/registration-confirm.component';
import {AgmCoreModule} from '@agm/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {ShareDataService} from "@services/share-data.service";
import {SnackbarComponent} from './model/snackbar/snackbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BlankPageComponent} from './trip/blank-page/blank-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    IndexComponent,
    UserComponent,
    EditUserComponent,
    UserSummaryComponent,
    UserUsersComponent,
    UserTripsComponent,
    DashboardComponent,
    RegistrationSuccessfulComponent,
    SuggestionServiceComponent,
    TripSuggestionComponent,
    TripFormComponent,
    RegistrationConfirmComponent,
    TripComponent,
    SnackbarComponent,
    BlankPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    AngularMultiSelectModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcaaElwdGQIGIRnr2Ay1Hl9BuqEwDpjeY'
    }),
    NgbModule,
    NgSelectModule
  ],
  providers: [
    Title,
    CurrencyPipe,
    DatePipe,
    TripsResolver,
    TripResolver,
    ShareDataService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarComponent]
})
export class AppModule {
}

