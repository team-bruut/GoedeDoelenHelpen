import { TestBed, inject } from '@angular/core/testing';

import { EventRegisterService } from './event-register.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        EventRegisterService,
        {provide: 'BASE_URL', useValue: ''},
      ],
    });
  });

  it('should be created', inject([EventRegisterService], (service: EventRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
