import { combineReducers } from 'redux';
// import homeReducer from './home/reducer';
import authReducer from './auth/reducer';

export default combineReducers({
  // home: homeReducer,
  auth: authReducer,
});
