// Modules
import { NgModule } from '@angular/core';
import { CoreMaterialModule } from './core-material/core-material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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

// Authentication
import { AuthenticationService } from './authentication.service';
import { ConfirmEmailComponent } from './user/confirm-email/confirm-email.component';
import { ActivatedComponent } from './user/activated/activated.component';

// Dashboard
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { DashboardModule } from './user/dashboard/dashboard.module';
import { PasswordResetLinkComponent } from './user/password-reset-link/password-reset-link.component';
import { TokenInterceptor } from './token.interceptor';
import { IsAuthenticated } from './IsAuthenticated.guard';

// Event
import { DefaultEventRegisterComponent } from './event/default-event-register/default-event-register.component';
import { EventRegisterService } from './event/default-event-register/event-register.service';
import { EventPageComponent } from './event/event-page/event-page.component';
import { EventPageModule } from './event/event-page/event-page.module';
import { WindowWrapper } from './classes/windowwrapper/windowwrapper';
import { FacebookComponent } from './user/facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SiteMapComponent,
    LoginComponent,
    ConfirmEmailComponent,
    ActivatedComponent,
    PasswordResetLinkComponent,
    DefaultEventRegisterComponent,
    FacebookComponent,
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
    EventPageModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Account/ConfirmEmail', component: ConfirmEmailComponent },
      { path: 'user/activated', component: ActivatedComponent },
      { path: 'user/login', component: LoginComponent },
      { path: 'evenement/register', component: DefaultEventRegisterComponent },
      { path: 'evenement/user/eventname', component: EventPageComponent },
      { path: 'user/userpasswordresetlink', component: PasswordResetLinkComponent},
      { path: 'user/assignfb', component: FacebookComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [IsAuthenticated]},
    ]),
  ],
  providers: [AuthenticationService, NavMenuService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
    IsAuthenticated,
    EventRegisterService,
    WindowWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
