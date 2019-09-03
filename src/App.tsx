/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 10:28:23
 * @modify date 2019-09-03 10:28:23
 * @desc App 入口
 */

// 禁用黄屏
console.disableYellowBox = true;

// 生产环境拦截全局异常，避免出现错误闪退。
if (!__DEV__) {
  require('ErrorUtils').setGlobalHandler((err: any) => {
    console.log(err);
  });
}

import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as AntdProvider } from '@ant-design/react-native';
import store from './store';
import Router from './Router';

const App = () => (
  <AntdProvider>
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  </AntdProvider>
);

export default App;
