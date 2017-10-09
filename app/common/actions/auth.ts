import { Action } from '@ngrx/store';
import { BaseUser } from '../models/BaseUser';

export const LOGOUT = '[Auth] Logout';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';

export const LOGIN = '[Auth] Login;'
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILED = '[Auth] Login Failed';

export const REGISTER = '[Auth] Register';
export const REGISTER_SUCCESS = '[Auth] Register Success';
export const REGISTER_FAILED = '[Auth] Register Failed';

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS;
}

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: BaseUser) { }
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: any) { }
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;
    constructor(public payload?: any) { }
}

export class Register implements Action {
    readonly type = REGISTER;
    constructor(public payload: BaseUser) { }
}

export class RegisterSuccess implements Action {
    readonly type = REGISTER_SUCCESS;
    constructor(public payload: any) { }
}

export class RegisterFailed implements Action {
    readonly type = REGISTER_FAILED;
    constructor(public payload?: any) { }
}

export type Actions
    = Logout
    | LogoutSuccess
    | Login
    | LoginSuccess
    | LoginFailed
    | Register
    | RegisterSuccess
    | RegisterFailed
