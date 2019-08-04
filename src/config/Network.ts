import BaseConfig from './index';

let API_ROOT_DOMAIN = 'http://www.xxx.com'; // 生产环境

// if (process.env.NODE_ENV === 'development') {
if (BaseConfig.debug) {
  API_ROOT_DOMAIN = 'http://172.18.2.159:8080'; // 开发环境
  // API_ROOT_DOMAIN = 'http://192.168.2.10:8080'; // 开发环境
}

const AUTH_URL = `${API_ROOT_DOMAIN}/v1/system`;

class Network {
  public static readonly API_ROOT_DOMAIN = API_ROOT_DOMAIN;
  public static readonly API_AUTH_URL = AUTH_URL;
}

export default Network;
