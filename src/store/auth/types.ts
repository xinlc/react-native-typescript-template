/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 10:01:44
 * @modify date 2019-09-03 10:01:44
 * @desc 定义 reducer，saga action type
 */
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
} from 'iron-redux';

/**
 * 定义 types
 */
const prefix = 'auth/';

enum BasicTypes {
  changeToken,
  signIn,
  logout,
  clearFetchSignIn,
  getUserInfo,
}

enum FetchTypes {
  fetchSignIn,
  fetchLogout,
  fetchUserInfo,
}

const Types = composeTypes({
  prefix,
  BasicTypes,
  FetchTypes,
});

export { Types, prefix };
