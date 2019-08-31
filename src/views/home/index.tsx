import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { WingBlank, WhiteSpace, Button } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { RootState } from '../../store/types';
import List from './List';
import { CUSTOMER_TOKEN } from '../../config/Constants';
import { getUserInfo } from '../../store/auth/actions';

export interface Props {
  openSignin: () => {};
}
const HomePage = ({ openSignin }: Props) => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const [currentToken, setCurrentToken] = useState<string | null>(null);

  useEffect(() => {
    // 切换用户情况，重新刷新列表
    setCurrentToken(token);

    // TODO: 需要触发列表更新，列表页
    // dispatch(actions.changeListLastRefreshTime(Date.now()));
  }, [token]);

  useEffect(() => {
    // componentDidMount
    // dispatch(initializeApp());

    // 验证是否登录
    isLoggedIn().then((isLogged) => {
      // 获取用户信息
      if (isLogged) {
        dispatch(getUserInfo());
      }
    });

    // 延迟关闭闪屏, 体验更好
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
  }, []);

  const isLoggedIn = async () => {
    const token = await AsyncStorage.getItem(CUSTOMER_TOKEN);
    setCurrentToken(token);
    if (!token) {
      openSignin();
      return false;
    }
    return true;
  };

  if (currentToken) {
    return <List />;
  }
  return (
    <WingBlank>
      <WhiteSpace />
      <Button type="primary" onPress={() => openSignin()}>
        去登陆
      </Button>
      <WhiteSpace />
    </WingBlank>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
});

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default React.memo(HomePage);
