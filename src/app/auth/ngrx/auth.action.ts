import { Action } from '@ngrx/store';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = ' LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const TRY_SIGNUP = 'TRY_SIGNUP';


export class TrySignUp implements Action {
  readonly type = TRY_SIGNUP;
  constructor(public payload: {username: string, password: string}) {}
}

export class Register implements Action {
  readonly type = REGISTER;
}

export class LogIn implements Action {
  readonly type = LOGIN;
}

export class LogOut implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type AuthAction = Register | LogIn | LogOut | SetToken | TrySignUp;
