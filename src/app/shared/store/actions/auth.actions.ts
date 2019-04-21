import { Action } from '@ngrx/store';
import { Credential } from '../../models/auth.model';
import { User } from '../../models/user.model';

export enum EAuthActions {
    GetMockUser = '[Auth] Get Mock User',
    GetMockUserSuccess = '[Auth] Get Mock User Success',
    GetUsers = '[Auth] Get Users',
    GetUsersSuccess = '[Auth] Get Users Success',
    Login = '[Auth] Login',
    LoginSuccess = '[Auth] Login Success',
    LoginFailure = '[Auth] Login Failure',
    Logout = '[Auth] Logout',
    LogoutSuccess = '[Auth] Logout Success'
}


export class GetMockUser implements Action {
    public readonly type = EAuthActions.GetMockUser;
}

export class GetMockUserSuccess implements Action {
    public readonly type = EAuthActions.GetMockUserSuccess;
    constructor(public payload: User) {}
}

export class GetUsers implements Action {
    public readonly type = EAuthActions.GetUsers;
}

export class GetUsersSuccess implements Action {
    public readonly type = EAuthActions.GetUsersSuccess;
    constructor(public payload: User[]) {}
}


export class Login implements Action {
    public readonly type = EAuthActions.Login;
    constructor(public payload: Credential) {}
}

export class LoginSuccess implements Action {
    public readonly type = EAuthActions.LoginSuccess;
    constructor(public payload: User) {}
}

export class LoginFailure implements Action {
    public readonly type = EAuthActions.LoginFailure;
    constructor(public payload: any) {}
}

export class Logout implements Action {
    public readonly type = EAuthActions.Logout;
}

export class LogoutSuccess implements Action {
    public readonly type = EAuthActions.LogoutSuccess;
}

export type AuthActions =   GetMockUser | GetMockUserSuccess |
                            Login | LoginSuccess | LoginFailure |
                            Logout | LogoutSuccess |
                            GetUsers | GetUsersSuccess;
