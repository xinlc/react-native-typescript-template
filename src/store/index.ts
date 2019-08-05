import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from './reducers';
import rootSaga from './sagas';
import BaseConfig from '../config';

const sagaMiddleware = createSagaMiddleware();
const middlewares: any = [sagaMiddleware];


// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

// debug 显示logger
if (BaseConfig.sagaLogger) {
  // 创建中间件 logger
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;
