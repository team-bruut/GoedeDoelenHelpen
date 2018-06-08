import { TestBed, inject } from '@angular/core/testing';

import { EventRegisterService } from './event-register.service';

describe('EventRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRegisterService]
    });
  });

  it('should be created', inject([EventRegisterService], (service: EventRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
