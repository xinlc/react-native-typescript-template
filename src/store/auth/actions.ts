import {
  API_TYPES,
  RESET_AUTH_STATE,
  RESET_AUTH_STATUS,
  AUTH_LOGOUT_SERVICE_TYPE,
  RESET_AUTH_STATUS_TYPE
} from '../actionsTypes';

/**
 |--------------------------------------------------
 | DEFINE SERVICE ACTION INTERFACE
 |--------------------------------------------------
 */

export const signIn = (username: string, password: string) => ({
  type: API_TYPES.SIGN_IN_REQUEST,
  payload: {
    username,
    password
  }
});

export const signUp = (payload: any) => ({
  type: API_TYPES.SIGN_UP_REQUEST,
  payload,
});

export const logout = (payload?: any) => ({
  type: AUTH_LOGOUT_SERVICE_TYPE,
  payload,
});


/**
 |--------------------------------------------------
 | DEFINE REDUCER ACTION INTERFACE
 |--------------------------------------------------
 */

export const resetAuthState = () => ({
  type: RESET_AUTH_STATE,
});

export interface ResetAuthStatusAction {
  type: RESET_AUTH_STATUS_TYPE;
}
export const resetAuthStatus = (): ResetAuthStatusAction => ({
  type: RESET_AUTH_STATUS,
});
