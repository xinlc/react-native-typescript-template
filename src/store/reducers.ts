import { combineReducers } from 'redux';
// import homeReducer from './home/reducer';
import authReducer from './auth/reducer';

export const rootReducers = {
  // home: homeReducer,
  auth: authReducer,
};
const rootReducer = combineReducers(rootReducers);

export default rootReducer;
