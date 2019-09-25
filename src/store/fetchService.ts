/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-08-31 19:22:06
 * @modify date 2019-08-31 19:22:06
 * @desc Fetch Middleware
 */
import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import Portal from '@ant-design/react-native/lib/portal';
import Modal from '@ant-design/react-native/lib/modal';
import { portal } from '@ant-design/react-native/lib/portal/portal-host';
import { Actions } from 'react-native-router-flux';
import Request from '../utils/Request';
import authActions, { logout } from './auth/actions';
import { CUSTOMER_TOKEN } from '../config/Constants';

/**
 * 处理所有fetch请求
 * @param action
 * @param loading
 * @param success
 * @param error
 */
export function* fetchService(action: any, loading: boolean = true, success: boolean = true, error: boolean = true) {
  const { types, url, stateKey, method, params, meta, ...rest } = action;
  try {
    // loading
    if (loading) {
      yield put({ type: types.loading, url, stateKey });
    }

    // fetch
    const met = (method as string).toLowerCase();
    const req: any = { url, method: met };
    // 如果是get，请求报文参数设置为params, 其他设置为data
    if (met === 'get') {
      req.params = params;
    } else {
      req.data = params;
      // console.log(req.data);
    }
    const res = yield Request(req);

    // 请求异常
    if (res.code !== 1 && res.code !== 20000) {

      // token 失效或未登录
      if (res.code === 0) {

        // 通知这次调用失败
        yield put({ type: types.error, url, stateKey, payload: { message: '您的登录状态已失效' }});

        // 手动关闭 alert, 避免弹出多个请求
        // https://github.com/ant-design/ant-design-mobile-rn/issues/524
        Portal.remove(portal.nextKey - 1);

        Modal.alert('提示', '您的登录已失效，您可以取消以停留在此页面，或再次登录', [
          { text: '取消', onPress: () => console.log('cancle'), style: 'cancle' },
          { text: '重新登陆', onPress: () => { Actions.login() }, }
        ]);

        // 清空本地相关缓存
        // 不要执行 saga 会出现错误死循环
        // yield put(logout());
        yield AsyncStorage.removeItem(CUSTOMER_TOKEN);
        yield put(authActions.changeToken(''));
      } else {
        // 未知错误
        throw new Error(res.msg || res.message || 'Error');
      }
    }

    if (success) {
      yield put({ type: types.success, url, stateKey, payload: res.data });
    }

    return res;
  } catch (e) {
    if (error) {
      yield put({ type: types.error, url, stateKey, payload: { message: e.message }});
    } else {
      throw e;
    }
  }
}
