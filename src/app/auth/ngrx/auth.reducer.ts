import * as Action from './auth.action';

export interface State {
  token: string;
  isAuthenticated: boolean;
}

const initialState: State = {
  token: null,
  isAuthenticated: false
};


export function authReducer(state = initialState, action: Action.AuthAction): State {
  switch (action.type) {
    case(Action.REGISTER):
    case(Action.LOGIN):
      return {
        ...state,
        isAuthenticated: true
      };
    case(Action.LOGOUT):
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
