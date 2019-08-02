
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
