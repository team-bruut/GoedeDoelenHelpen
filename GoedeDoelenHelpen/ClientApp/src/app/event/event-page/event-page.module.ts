import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { EventPageComponent } from './event-page.component';
import { UserComponent } from './partials/user/user.component';
import { DetailsComponent } from './partials/details/details.component';
import { EditDetailsComponent } from './partials/details/edit-details/edit-details.component';
import { DonatedComponent } from './partials/donated/donated.component';
import { CommentsComponent } from './partials/comments/comments.component';
import { CharityComponent } from './partials/charity/charity.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EventPageComponent,
    UserComponent,
    DetailsComponent,
    DonatedComponent,
    CommentsComponent,
    CharityComponent,
    EditDetailsComponent,
  ],
  entryComponents: [
    EditDetailsComponent,
  ],
  exports: [
    EventPageComponent
  ]
})
export class EventPageModule { }
