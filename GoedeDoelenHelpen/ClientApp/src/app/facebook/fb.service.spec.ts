import { TestBed, inject } from '@angular/core/testing';

import { FbService } from './fb.service';

import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterStub } from './../../testing/stubs/router.stub';
import { WindowWrapper } from './../classes/windowwrapper/windowwrapper';

describe('FbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        FbService,
        WindowWrapper,
        {provide: 'BASE_URL', useValue: ''},
        {provide: Router, useClass: RouterStub},
      ],
    });
  });

  it('should be created', inject([FbService], (service: FbService) => {
    expect(service).toBeTruthy();
  }));
});
