import {RouterModule, Routes} from '@angular/router';
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from "./auth/login/login.component";
import {UserComponent} from "./user/user.component";
import {RegistrationSuccessfulComponent} from "./auth/registration/registration-successful/registration-successful.component";
import {TripsResolver} from "./user/user-trips/trips.resolver";
import {IndexComponent} from "./system/index/index.component";
import {RegistrationConfirmComponent} from "./auth/registration/registration-confirm/registration-confirm.component";
import {TripComponent} from "./trip/trip.component";
import {TripResolver} from "./trip/trip.resolver";
import {BlankPageComponent} from "./trip/blank-page/blank-page.component";
import {Role} from "@models/role";

const appRoutes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'registrationSuccessful', component: RegistrationSuccessfulComponent},
  {path: 'registrationConfirm/:token', component: RegistrationConfirmComponent},
  {
    path: 'account',
    component: UserComponent,
    canActivate: [AuthGuard],
    resolve: {tripData: TripsResolver},
    runGuardsAndResolvers: 'always'
  },
  {path: 'account/edit', component: EditUserComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {
    path: 'trip/:id',
    component: TripComponent,
    resolve: {tripData: TripResolver},
    runGuardsAndResolvers: 'always',
  },
  {path: 'blank', component: BlankPageComponent},
  {path: '', component: IndexComponent},
  {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: "reload"});
