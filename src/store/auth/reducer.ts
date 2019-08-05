import {
  API_TYPES, Status,
  ACTION_USER_LOGOUT,
  RESET_AUTH_STATE,
  RESET_AUTH_STATUS
} from '../actionsTypes';

const INITIAL_STATE = {
  signInStatus: Status.STATUS_DEFAULT,
  signUpStatus: Status.STATUS_DEFAULT,
  token: '',

  signInErrorMessage: '',
  signUpErrorMessage: '',
};

export type AUTH_STATE = typeof INITIAL_STATE;

export interface IAction<T = any> {
  type: string;
  payload: T;
}

export default (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case API_TYPES.SIGN_IN_LOADING:
      return {
        ...state,
        signInStatus: Status.STATUS_LOADING,
        signInErrorMessage: '',
      };
    case API_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInStatus: Status.STATUS_SUCCESS,
      };
    case API_TYPES.SIGN_IN_FAILURE:
      return {
        ...state,
        signInStatus: Status.STATUS_ERROR,
        signInErrorMessage: payload.errorMessage
      };
    case API_TYPES.SIGN_UP_LOADING:
      return {
        ...state,
        signUpStatus: Status.STATUS_LOADING,
        signUpErrorMessage: '',
      };
    case API_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpStatus: Status.STATUS_SUCCESS,
      };
    case API_TYPES.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpStatus: Status.STATUS_ERROR,
        signUpErrorMessage: payload.errorMessage,
      };
    case API_TYPES.CURRENT_USER_SUCCESS:
      return {
        ...state,
        token: payload.token,
      };
    case ACTION_USER_LOGOUT:
    case RESET_AUTH_STATE:
      return INITIAL_STATE;
    case RESET_AUTH_STATUS:
      return {
        ...state,
        signInStatus: Status.STATUS_DEFAULT,
        signUpStatus: Status.STATUS_DEFAULT,
      };
    default:
      return state;
  }
};
