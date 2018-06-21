import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: AuthenticationService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AuthenticationService(<any> httpClientSpy, '');
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
