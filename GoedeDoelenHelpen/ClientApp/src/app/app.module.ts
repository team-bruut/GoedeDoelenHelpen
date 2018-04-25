// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// General
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppMaterialModule } from './app.material.module';
import { RegisterComponent } from './user/register/register.component';
import { RegisterService } from './user/register/register.service';
import { RoundedButtonDirective } from './elements/rounded-button.directive';
import { AuthenticationService } from './authentication.service';
import { ConfirmEmailComponent } from './user/confirm-email/confirm-email.component';
import { ActivatedComponent } from './user/activated/activated.component';

// Home
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    RegisterComponent,
    RoundedButtonDirective,
    ConfirmEmailComponent,
    ActivatedComponent
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
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'user/register', component: RegisterComponent },
      { path: 'Account/ConfirmEmail', component: ConfirmEmailComponent },
      { path: 'user/activated', component: ActivatedComponent },
    ])
  ],
  providers: [RegisterService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
