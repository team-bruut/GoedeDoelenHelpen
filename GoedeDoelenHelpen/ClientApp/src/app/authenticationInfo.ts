
export type AuthenticationInfoNotLoggedIn = {
    loggedIn: false;
};
export type AuthenticationInfoLoggedIn = {
    loggedIn: true;
    username: string;
};

export type authenticationInfo =
    | AuthenticationInfoLoggedIn
    | AuthenticationInfoNotLoggedIn;
