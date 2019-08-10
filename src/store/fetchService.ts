import { call, put } from 'redux-saga/effects';
import Request from '../utils/Request';

/**
 * FetchMiddleware
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
    if (met === 'get') {
      req.params = params;
    } else {
      req.data = params;
      // console.log(req.data);
    }
    const res = yield Request(req);

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
