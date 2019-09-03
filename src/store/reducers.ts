/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 10:03:31
 * @modify date 2019-09-03 10:03:31
 * @desc 配置 reducer
 */
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
