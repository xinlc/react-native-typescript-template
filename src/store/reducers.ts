import { combineReducers } from 'redux';
// import homeReducer from './home/reducer';
import appReducer from './app/reducer';
import authReducer from './auth/reducer';

export const rootReducers = {
  // home: homeReducer,
  app: appReducer,
  auth: authReducer,
};
const rootReducer = combineReducers(rootReducers);

export default rootReducer;
