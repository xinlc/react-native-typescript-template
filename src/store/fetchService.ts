/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-08-31
 * @modify date 2019-08-31
 * @desc Fetch Middleware
 */
import { call, put } from 'redux-saga/effects';
import { Modal } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Request from '../utils/Request';
import { logout } from './auth/actions';

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
        // 自动执行注销, 清空本地相关缓存
        put(logout());

        Modal.alert('提示', '您的登录已失效，您可以取消以停留在此页面，或再次登录', [
          { text: '取消', onPress: () => console.log('cancle'), style: 'cancle' },
          { text: '重新登陆', onPress: () => { Actions.login() }, }
        ]);
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
