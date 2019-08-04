import Request from '../utils/Request';
import Network from '../config/Network';

interface SignInData {
  username: string;
  password: string;
}
export function signIn(data: SignInData) {
  return Request({
    url: `${Network.API_AUTH_URL}/login`,
    method: 'post',
    data,
  });
}

export function signUp(data: any) {
  return Request({
    url: '/system/login',
    method: 'post',
    data,
  });
}

export function getInfo(token: any) {
  return Request({
    url: '/user/info',
    method: 'get',
    params: { token },
  });
}

export function logout() {
  return Request({
    url: '/user/logout',
    method: 'post',
  });
}
