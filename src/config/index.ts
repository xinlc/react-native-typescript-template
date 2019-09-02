/**
 * Created by Leo on 19/7/17.
 */
/* eslint-disable */
const BaseConfig = {
  // PROD PROFILE
  /*
    debug: false,
    sagaLogger: false,
  // */

  // DEBUG PROFILE
  //*
  debug: true,
  sagaLogger: true,
  // */

  appVersion: '0.0.1',

  timeoutMS: 1 * 60 * 1000,
  serverMessage: '请求服务器异常!',
  timeoutMessage: '请求超时，请检查你的网络！',

  HttpCode: {
    unauthorized: 40100,
  },
};

/**
 *  重写console.log，info
 *  打包发布别忘了 BaseConfig.debug 改成false
 */
(() => {
  // console._log = console.log;
  // if (!__DEV__) {  // React Native中有一个全局变量__DEV__用于指示当前运行环境是否是开发环境。
  // 	console.log = () => null;
  // 	console.info = () => null;
  // }

  // 不要使用这个，release 不好用，使用 transform-remove-console 插件代替
  // if (!BaseConfig.debug) {
  //   global.console = {
  //     info: () => {},
  //     log: () => {},
  //     warn: () => {},
  //     debug: () => {},
  //     error: () => {},
  //   };
  // }
})();

export default Object.freeze(BaseConfig);
