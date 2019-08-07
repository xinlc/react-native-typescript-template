import { combineReducers } from 'redux';
// import homeReducer from './home/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  // home: homeReducer,
  auth: authReducer,
});

export default rootReducer;
