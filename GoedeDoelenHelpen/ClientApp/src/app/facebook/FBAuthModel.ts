export type FBAuthModel = {
  status: string;
  authResponse: FBAuthResponse;
}

export type FBAuthResponse = {
  accessToken: string;
  expiresIn: string;
  signedRequest: string;
  userId: string;
}

export type FBBackendResponse = {
  AccessToken: string;
  ExpiresIn: string;
  loggedIn: boolean;
}
