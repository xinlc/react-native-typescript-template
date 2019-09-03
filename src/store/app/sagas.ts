/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 09:58:14
 * @modify date 2019-09-03 09:58:14
 * @desc App Saga, 业务处理
 */
import { takeLatest, call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Types } from './types';
import { CUSTOMER_TOKEN } from '../../config/Constants';
import actions, { initializeApp } from './actions';
import authActions from '../auth/actions';

/**
 * 初始化 app
 * @param action
 */
function* initializeService(action: ReturnType<typeof initializeApp>) {
  const { payload } = action;
  try {
    // 初始化 auth state
    const token = yield AsyncStorage.getItem(CUSTOMER_TOKEN);
    yield put(authActions.changeToken(token));

  } catch (error) {
    console.log('service', error);
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(Types.initializeApp, initializeService);
}
