// Modules
import { NgModule } from '@angular/core';
import { CoreMaterialModule } from './core-material/core-material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// General
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { SiteMapComponent } from './site-map/site-map.component';

// Navigation
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavMenuService } from './nav-menu/nav-menu.service';

// Home
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

// Login
import { LoginComponent } from './user/login/login.component';

// Registration
import { RegisterComponent } from './user/register/register.component';
import { RegisterService } from './user/register/register.service';

// Authentication
import { AuthenticationService } from './authentication.service';
import { ConfirmEmailComponent } from './user/confirm-email/confirm-email.component';
import { ActivatedComponent } from './user/activated/activated.component';

// Dashboard
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { DashboardModule } from './user/dashboard/dashboard.module';
import { PasswordResetLinkComponent } from './user/password-reset-link/password-reset-link.component';

import { SocialLoginModule, AuthServiceConfig } from "angular5-social-login";
import { FacebookLoginProvider } from "angular5-social-login";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SiteMapComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmEmailComponent,
    ActivatedComponent,
    PasswordResetLinkComponent,
  ],
  imports: [
    SharedModule,
    CoreMaterialModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    HomeModule,
    DashboardModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'user/register', component: RegisterComponent },
      { path: 'Account/ConfirmEmail', component: ConfirmEmailComponent },
      { path: 'user/activated', component: ActivatedComponent },
      { path: 'user/login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'User/UserPasswordResetLink', component: PasswordResetLinkComponent}
    ]),
  ],
  providers: [RegisterService, AuthenticationService, NavMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
