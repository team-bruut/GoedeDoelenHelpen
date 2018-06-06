import { EventPageModule } from './event-page.module';

describe('EventPageModule', () => {
  let eventPageModule: EventPageModule;

  beforeEach(() => {
    eventPageModule = new EventPageModule();
  });

  it('should create an instance', () => {
    expect(eventPageModule).toBeTruthy();
  });
});
