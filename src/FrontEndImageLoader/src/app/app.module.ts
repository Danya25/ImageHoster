import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {AppComponent} from './app.component';
import {ToastrModule} from 'ngx-toastr';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { UserProfileComponent } from './content/user-profile/user-profile.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { ErrorComponent } from './content/error/error.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/auth.service';
import {UserInformationService} from './shared/user-information.service';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './content/footer/footer.component';
import { UserSettingsComponent } from './content/user-settings/user-settings.component';
import { HeaderAfterLoginComponent } from './layout/header-after-login/header-after-login.component';
import { HeaderBeforeLoginComponent } from './layout/header-before-login/header-before-login.component';
import { UnauthMainLayoutComponent } from './layout/unauth-main-layout/unauth-main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    LoginComponent,
    RegistrationComponent,
    MainLayoutComponent,
    UserProfileComponent,
    MainContentComponent,
    ErrorComponent,
    FooterComponent,
    UserSettingsComponent,
    HeaderAfterLoginComponent,
    HeaderBeforeLoginComponent,
    UnauthMainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserInformationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
