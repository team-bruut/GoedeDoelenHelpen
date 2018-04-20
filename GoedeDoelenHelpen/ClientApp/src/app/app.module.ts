import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppMaterialModule } from './app.material.module';
import { RegisterComponent } from './user/register/register.component';
import { RegisterService } from './user/register/register.service';
import { HomePartialComponent } from './home/home-partial/home-partial.component';
import { RoundedButtonDirective } from './elements/rounded-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RegisterComponent,
    HomePartialComponent,
    RoundedButtonDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'user/register', component: RegisterComponent },
    ]),
    AppMaterialModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
