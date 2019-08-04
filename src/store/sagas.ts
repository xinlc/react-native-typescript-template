import { fork } from 'redux-saga/effects';

// import homeSagas from './home/sagas';
import authSagas from './auth/sagas';

/**
 * rootSaga
 */
export default function* root() {
  // yield fork(homeSagas);
  yield fork(authSagas);
}
