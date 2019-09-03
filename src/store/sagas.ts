/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 10:03:51
 * @modify date 2019-09-03 10:03:51
 * @desc 配置 Saga
 */
import { fork } from 'redux-saga/effects';

// import homeSagas from './home/sagas';
import appSagas from './app/sagas';
import authSagas from './auth/sagas';

/**
 * rootSaga
 */
export default function* root() {
  // yield fork(homeSagas);
  yield fork(appSagas);
  yield fork(authSagas);
}
