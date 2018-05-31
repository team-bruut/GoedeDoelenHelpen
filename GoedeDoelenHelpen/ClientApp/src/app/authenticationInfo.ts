
export type AuthenticationInfoNotLoggedIn = {
    loggedIn: false;
};
export type AuthenticationInfoLoggedIn = {
    loggedIn: true;
    username: string;
    firstName: string;
    lastName: string;
};

export type AuthenticationInfo =
    | AuthenticationInfoLoggedIn
    | AuthenticationInfoNotLoggedIn;
