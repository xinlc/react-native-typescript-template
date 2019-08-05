const REQUEST = 'REQUEST';
const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const STATUS_DEFAULT = 'NOT_STARTED';
const STATUS_LOADING = 'LOADING';
const STATUS_SUCCESS = 'SUCCESS';
const STATUS_ERROR = 'ERROR';

const suffixTypes = [REQUEST, LOADING, SUCCESS, FAILURE];

function createRequestTypes(prefix = '', bases, suffixes = suffixTypes) {
  const req = {};
  bases.forEach((base) => {
    suffixes.forEach((suffix) => {
      req[`${base}_${suffix}`] = `${prefix}_${base}_${suffix}`;
    });
  });
  return req;
}

// REST API

export const API_TYPES: any = createRequestTypes('API_TYPE', [
  'SIGN_IN', // Sign in already existing user
  'SIGN_UP', // Create new user account
  'CURRENT_USER', // Fetch details of current logged in user
  'STORAGE_LIST', // 采购计划列表
  'STORAGE_DETAIL', // 采购计划详情
  'STORAGE_PUT_IN_STORAGE', // 入库
], suffixTypes);

if (__DEV__) {
  console.log('api----------->', API_TYPES);
  const temp = {};
  Object.entries(API_TYPES).forEach((arr: any) => {
    temp[arr[0]] = 'string';
  });
  console.log('api----------->', temp);
}

export const Status = Object.freeze({
  STATUS_DEFAULT, STATUS_LOADING, STATUS_SUCCESS, STATUS_ERROR
});

export const CUSTOMER_TOKEN = 'CUSTOMER_TOKEN';


/**
 |--------------------------------------------------
 | DEFINE ACTION TYPE
 | this will be reused in the reducer and service
 | FORMAT:
 | for reducer action [FILENAME]_[ACTION]_TYPE
 | for service action [FILENAME]_[ACTION]_SERVICE_TYPE
 |--------------------------------------------------
 */

export const ACTION_USER_LOGOUT = 'USER_LOGOUT';
export type ACTION_USER_LOGOUT_TYPE = typeof ACTION_USER_LOGOUT;
export const RESET_AUTH_STATE = 'RESET_AUTH_STATE';
export type RESET_AUTH_STATE_TYPE = typeof RESET_AUTH_STATE;
export const RESET_AUTH_STATUS = 'RESET_AUTH_STATUS';
export type RESET_AUTH_STATUS_TYPE = typeof RESET_AUTH_STATUS;
export const AUTH_LOGOUT_SERVICE_TYPE/* : AUTH_LOGOUT_SERVICE_TYPE */ = 'AUTH_LOGOUT_SERVICE_TYPE';
export type AUTH_LOGOUT_SERVICE_TYPE_TYPE = typeof AUTH_LOGOUT_SERVICE_TYPE;
