import { takeLatest, call, put } from 'redux-saga/effects';
import { ActionType } from 'iron-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Types } from './types';
import actions, { signIn, logout } from './actions';
import { fetchService } from '../fetchService';
import { CUSTOMER_TOKEN } from '../../config/Constants';

function* signInService(action: ActionType<typeof signIn>) {
  const { payload } = action;
  try {
    const fsi = actions.fetchSignIn({
      loginName: payload.username,
      userPass: payload.password
    });
    const res: typeof fsi.payload = yield* fetchService(fsi);
    if (res) {
      const { data: token } = res;
      yield AsyncStorage.setItem(CUSTOMER_TOKEN, token);
      yield put(actions.changeToken(token));
    }
  } catch (error) {
    // 处理异常
    // yield put({ type: API_TYPES.SIGN_IN_FAILURE, payload: { errorMessage: error.message } });
  }
}

function* logoutService(action: ActionType<typeof logout>) {
  try {
    yield AsyncStorage.removeItem(CUSTOMER_TOKEN);
    yield put(actions.changeToken(''));
  } catch (error) {
    console.log(error);
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(Types.signIn, signInService);
  yield takeLatest(Types.logout, logoutService);
}
