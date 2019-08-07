import { combineReducers } from 'redux';
// import homeReducer from './home/reducer';
import authReducer from './auth/reducer';
import { systemReducer } from './system/reducers';
import { chatReducer } from './chat/reducers';

const rootReducer = combineReducers({
  // home: homeReducer,
  auth: authReducer,
  system: systemReducer,
  chat: chatReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
