import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {UserProfileComponent} from './content/user-profile/user-profile.component';
import {MainContentComponent} from './content/main-content/main-content.component';
import {ErrorComponent} from './content/error/error.component';
import {UserSettingsComponent} from './content/user-settings/user-settings.component';
import {AuthorizedGuard} from './shared/guards/authorized.guard';
import {UnauthMainLayoutComponent} from './layout/unauth-main-layout/unauth-main-layout.component';
import {UnauthorizedGuard} from './shared/guards/unauthorized.guard';

const routes: Routes = [
  {
    path: 'auth', component: AuthLayoutComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent}
    ]
  },
  {
    path: 'app', component: MainLayoutComponent, canActivate: [AuthorizedGuard], children: [
      {
        path: 'profile', component: UserProfileComponent, children: [{
          path: 'settings', component: UserSettingsComponent
        }]
      },
      {path: '', pathMatch: 'full', component: MainContentComponent}
    ]
  },
  {
    path: '', component: UnauthMainLayoutComponent, canActivate: [UnauthorizedGuard], children: [{
      path: '', pathMatch: 'full', component: MainContentComponent
    }]
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
