import {
  API_TYPES,
  RESET_AUTH_STATE,
  RESET_AUTH_STATUS,
  AUTH_LOGOUT_SERVICE_TYPE
} from '../actionsTypes';

/**
 |--------------------------------------------------
 | DEFINE SERVICE ACTION INTERFACE
 |--------------------------------------------------
 */

export const signIn = (username, password) => ({
  type: API_TYPES.SIGN_IN_REQUEST,
  payload: {
    username,
    password
  }
});

export const signUp = payload => ({
  type: API_TYPES.SIGN_UP_REQUEST,
  payload,
});

export const logout = payload => ({
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

export const resetAuthStatus = () => ({
  type: RESET_AUTH_STATUS,
});
