import { TestBed, inject } from '@angular/core/testing';

import { EventRegisterService } from './event-register.service';
import { HttpClientModule } from '@angular/common/http';

describe('EventRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, ],
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
