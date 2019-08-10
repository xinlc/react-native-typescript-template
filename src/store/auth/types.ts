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
}

enum FetchTypes {
  fetchSignIn,
  userInfo,
}

const Types = composeTypes({
  prefix,
  BasicTypes,
  FetchTypes,
});

export { Types, prefix };
