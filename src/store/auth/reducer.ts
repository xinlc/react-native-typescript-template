import {
  AsyncTuple,
  ActionType,
} from 'iron-redux';
import { Types, prefix } from './types';
import actions, { FetchSignInRes, FetchUserInfoRes } from './actions';

// 1、复杂的属性可以尽量写些注释，方便调用的时候可以辨识
// 2、使用 AsyncTuple 来管理异步获取的数据. InitialState 里不要有各种 loading、error 字段
// 3、将 initial state 命名为 State，这样可以同时产生 state 的初始值以及 state 的类型定义。
// 4、命名规范：API 前缀加 fetch

const fetchSignIn = new AsyncTuple<FetchSignInRes>(false);
const fetchLogout = new AsyncTuple(false);
const fetchUserInfo = new AsyncTuple<FetchUserInfoRes>(false);
class State {
  public token = '';
  public fetchSignIn = fetchSignIn;
  public fetchLogout = fetchLogout;
  public fetchUserInfo = fetchUserInfo;
}

/**
 * reducer
 */
export default (
  state = new State(),
  action: ActionType<typeof actions>
): State => {
  switch (action.type) {
    case Types.clearFetchSignIn: {
      return { ...state, fetchSignIn };
    }
    default: {
      return AsyncTuple.handleAll(prefix, state, action);
    }
  }
};
