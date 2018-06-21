import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRouteStub } from './activated-route.stub';
import { AuthenticationServiceStub } from './authentication.service.stub';
import { RouterLinkDirectiveStub } from './router-link-directive-stub';
import { RouterStub } from './router.stub';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActivatedRouteStub,
    AuthenticationServiceStub,
    RouterLinkDirectiveStub,
    RouterStub,
  ],
  exports: [
    ActivatedRouteStub,
    AuthenticationServiceStub,
    RouterLinkDirectiveStub,
    RouterStub,
  ],
})
export class StubsModule { }
