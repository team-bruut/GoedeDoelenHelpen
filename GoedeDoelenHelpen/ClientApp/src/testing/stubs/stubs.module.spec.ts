import { StubsModule } from './stubs.module';

describe('StubsModule', () => {
  let stubsModule: StubsModule;

  beforeEach(() => {
    stubsModule = new StubsModule();
  });

  it('should create an instance', () => {
    expect(stubsModule).toBeTruthy();
  });
});
