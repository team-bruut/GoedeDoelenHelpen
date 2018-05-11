// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app.material.module';

// General
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { RoundedButtonDirective } from './elements/rounded-button.directive';

// Home
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

// Authentication
import { RegisterComponent } from './user/register/register.component';
import { RegisterService } from './user/register/register.service';
import { AuthenticationService } from './authentication.service';
import { ConfirmEmailComponent } from './user/confirm-email/confirm-email.component';
import { ActivatedComponent } from './user/activated/activated.component';
import { LoginComponent } from './user/login/login.component';

// Dashboard
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { NavMenuService } from './nav-menu/nav-menu.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    RegisterComponent,
    RoundedButtonDirective,
    ConfirmEmailComponent,
    ActivatedComponent,
    LoginComponent,
    SiteMapComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    HomeModule,
    AppMaterialModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'user/register', component: RegisterComponent },
      { path: 'Account/ConfirmEmail', component: ConfirmEmailComponent },
      { path: 'user/activated', component: ActivatedComponent },
      { path: 'user/login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent }
    ]),
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [RegisterService, AuthenticationService, NavMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
