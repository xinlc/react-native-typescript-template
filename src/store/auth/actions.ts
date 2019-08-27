import {
  composeTypes,
  createAction,
  ActionCreator,
  AsyncTuple,
  NO_ERROR_TYPES,
  createFetchAction,
  ThunkAction,
  ActionType,
  safeGet,
  Method,
} from 'iron-redux';
import Network from '../../config/Network';
import { Types } from './types';

/**
 |--------------------------------------------------
 | DEFINE REDUCER ACTION INTERFACE
 |--------------------------------------------------
 */

// 登录
interface FetchSignInReq {
  loginName: string;
  userPass: string;
}
export interface FetchSignInRes {
  data: string;
}
const fetchSignInUrl = `${Network.API_AUTH_URL}/login`;
const fetchSignIn = createFetchAction(Types.fetchSignIn, fetchSignInUrl, Method.Post)<FetchSignInReq, FetchSignInRes>('fetchSignIn');

// 清空登录 fetch state
const clearFetchSignIn = createAction(Types.clearFetchSignIn)();

// change token
const changeToken = createAction(Types.changeToken, 'token')<string>();
export default {
  changeToken,
  fetchSignIn,
  clearFetchSignIn,
};

/**
 |--------------------------------------------------
 | DEFINE SERVICE ACTION INTERFACE
 |--------------------------------------------------
 */

interface SignInParams {
  username: string;
  password: string;
}
export const signIn = createAction(Types.signIn)<SignInParams>();
export const logout = createAction(Types.logout)();

// interface GetUsersParams {
//   page: number;
//   limit: number;
//   callback: (res: FetchUsersRes) => any;
// }
// export const getUsers = createAction(Types.getUsers)<GetUsersParams>()