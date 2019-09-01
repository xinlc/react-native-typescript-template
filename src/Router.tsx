import React from 'react';
import { BackHandler, StyleSheet, View, Text } from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Overlay,
  Tabs,
  Modal,
  Stack,
  ActionConst,
  Lightbox,
} from 'react-native-router-flux';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { Toast, Portal } from '@ant-design/react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { CUSTOMER_TOKEN } from './config/Constants';
import { callOnceInInterval } from './utils/Common';

import RNComponents from './components/RN-components';
import TabIcon from './components/TabIcon';
import BackButton from './components/BackButton';

import AuthLoading from './views/auth/AuthLoading';
// import Signin from './views/auth/Signin';
import Signup from './views/auth/Signup';
import Home from './views/home';
import Me from './views/me';

// 按需加载
const SigninComponent = React.lazy(() => import('./views/auth/Signin'));
// const Signup = React.lazy(() => import('./views/auth/Signup'));
// const Home = React.lazy(() => import('./views/home'));
// const Me = React.lazy(() => import('./views/me'));
const Signin = (...rest: any) => (
  <React.Suspense fallback={<Text>Loading...</Text>}>
    <SigninComponent {...rest} />
  </React.Suspense>
);

// https://github.com/aksonov/react-native-router-flux/issues/2741
// https://github.com/react-navigation/react-navigation/issues/1759
const transitionConfig = () => ({
  // screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
  screenInterpolator: StackViewStyleInterpolator.forHorizontal,
});

const stateHandler = (prevState: any, newState: any, action: any) => {
  // console.log('onStateChange: prevState:', prevState);
  // console.log('onStateChange: newState:', newState);
  console.log('onStateChange: ACTION:', action);
};

let backButtonPressedOnceToExit = false;
const backAndroidHandler = () => {
  // console.log('currentScene --->>> ', Actions.currentScene);
  if (Actions.currentScene !== '_home') {
    return false;
  }

  if (backButtonPressedOnceToExit) {
    BackHandler.exitApp();
  } else {
    backButtonPressedOnceToExit = true;
    Toast.info('再按一次退出', 1.5);

    setTimeout(() => {
      backButtonPressedOnceToExit = false;
    }, 2000);
  }
  return true; // 阻止默认退出App行为
};

const isLoggedIn = async () => {
  const token = await AsyncStorage.getItem(CUSTOMER_TOKEN);
  if (token) {
    return true;
  }
  return false;
};

// const renderTitle = ({ title }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={styles.titleStyle}>{title}</Text>
//     </View>
//   );
// };

// Actions.popTo('home');
// Actions.replace('home');
// tab 跳转请使用jump
// Actions.jump('home')

const RouterConfig = () => (
  <Router
    sceneStyle={styles.scene}
    onStateChange={stateHandler}
    backAndroidHandler={backAndroidHandler}
    navigationBarStyle={styles.navigationBarStyle}
    titleStyle={styles.titleStyle}
    backButtonTintColor="#FFFFFF"
    // renderTitle={renderTitle}
  >
    <Overlay key="overlay">
      {/* <Modal key="modal" hideNavBar transitionConfig={transitionConfig}> */}
      <Modal key="modal" hideNavBar>
        <Lightbox key="lightbox">
          <Scene
            key="root"
            hideNavBar
            duration={300}
            pressOpacity={1}
            transitionConfig={transitionConfig}
          >
            {/* <Scene
              key="launch"
              title="Launch"
              // hideNavBar
              component={AuthLoading}
              type={ActionConst.RESET}
              initial
              onSuccess={() => Actions.tab_home()}
              onFailure={() => Actions.login()}
              // 如需单独进行权限控制页面可以用下面的API
              // onEnter={isLoggedIn}
              // success={() => Actions.login()}
              // failure={() => Actions.login()}
            /> */}
            <Tabs
              key="tabbar"
              routeName="tabbar"
              backToInitial
              onTabOnPress={() => {
                console.log('Back to initial and also print this');
              }}
              showLabel={false}
              tabBarStyle={styles.tabBarStyle}
            >
              <Scene
                key="home"
                title="首页"
                tabBarLabel="首页"
                iconName="home"
                icon={TabIcon}
                component={Home}
                openSignin={() => callOnceInInterval(() => Actions.login())}
                initial
              />
              <Scene
                key="me"
                title="我的"
                tabBarLabel="我的"
                iconName="user"
                icon={TabIcon}
                hideNavBar
                component={Me}
                openSignin={() => callOnceInInterval(() => Actions.login())}
              />
            </Tabs>

            <Scene
              key="RNComponents"
              title="RNComponents"
              hideNavBar={false}
              back
              component={RNComponents}
            />
          </Scene>
        </Lightbox>

        <Stack key="login">
          <Scene
            key="signin"
            component={Signin}
            title="登录"
            panHandlers={null}
            duration={1}
            back
            onBack={() => { Actions.pop() }}
            onBackToHome={() => { Actions.jump('home') }}
          />
          <Scene
            key="signup"
            component={Signup}
            title="注册"
            panHandlers={null}
            duration={1}
            back
            onBack={() => {
              Actions.pop();
            }}
          />
        </Stack>
      </Modal>
    </Overlay>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scene: {
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#FFFFFF',
  },
  navigationBarStyle: {
    backgroundColor: '#3D7EFF',
  },
  titleStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default RouterConfig;
