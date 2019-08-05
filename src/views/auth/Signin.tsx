import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import {
  Toast,
  Portal,
  Button,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/BackButton';
import { Status } from '../../store/actionsTypes';
import { signIn, resetAuthState, resetAuthStatus } from '../../store/actions';
import IStoreState from '../../store/types';

export interface Props {
  onBack: () => void;
}
let loadKey: any = null;
const SignInPage = ({ onBack }: Props) => {
  const dispatch = useDispatch();
  // const [form, setValues] = useState({
  //   userName: '',
  //   password: '',
  // });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [seePwd, setSeePwd] = useState(false);

  const status = useSelector<IStoreState, string>(state => state.auth.signInStatus);
  const errorMessage = useSelector((state: IStoreState) => state.auth.signInErrorMessage);

  useEffect(
    () => () => {
      // componentWillUnmount
      // dispatch(resetAuthState());
    },
    []
  );

  useEffect(() => {
    // handleStatusChange
    if (status === Status.STATUS_LOADING) {
      loadKey = Toast.loading('登录中...', 0);
    } else {
      loadKey && Portal.remove(loadKey);
    }
    if (status === Status.STATUS_ERROR) {
      Toast.fail(errorMessage);
      // dispatch(resetAuthStatus());
    }
    if (status === Status.STATUS_SUCCESS) {
      onBack();
    }
  }, [status]);

  const onSignInPress = () => {
    if (!username) {
      setTimeout(() => {
        Toast.fail('请输入用户名');
      }, 1);
      return;
    }
    if (!password) {
      Toast.info('请输入密码');
      return;
    }
    dispatch(signIn(username, password));
  };

  return (
    <ScrollView style={styles.wrapper} keyboardDismissMode="interactive">
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.jpeg')}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.inputWrap}>
          <Text style={{ color: '#393939', fontSize: 16, width: 85 }}>
            用户名
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setUsername(text)}
            defaultValue={username}
            placeholder="请输入用户名"
            maxLength={30}
            // keyboardType="numeric"
            placeholderTextColor="#a6a6a6"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={{ color: '#393939', fontSize: 16, width: 85 }}>
            密&nbsp;&nbsp;&nbsp;&nbsp;码
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            defaultValue={password}
            secureTextEntry={!seePwd}
            placeholder="请输入密码"
            maxLength={20}
            placeholderTextColor="#a6a6a6"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            onPress={() => setSeePwd(!seePwd)}
            style={styles.seePwdBtn}
          >
            <Icon
              name={seePwd ? 'eye' : 'eye-slash'}
              size={20}
              style={{ color: '#9E9FA0' }}
            />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={styles.btn}
          onPress={onSignInPress}
          textStyle={styles.btnText}
        >
          <Text>登录</Text>
        </TouchableOpacity> */}
        <WingBlank>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <Button type="primary" onPress={() => onSignInPress()}>
            登陆
          </Button>
          <WhiteSpace />
        </WingBlank>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54,
    marginTop: 15,
  },
  navBarTextLeft: {
    marginLeft: 15,
    fontSize: 16,
    color: '#000',
  },
  navBarTextRight: {
    marginRight: 6,
    color: '#6685bd',
    fontSize: 14,
  },
  logoWrapper: {
    flex: 1,
    marginTop: 35,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
  },
  main: {
    marginTop: 20,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    marginLeft: 22,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E2E2',
  },
  input: {
    flex: 1,
    borderWidth: 0,
    marginRight: 10,
    fontSize: 16,
    color: '#393939',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 40,
    backgroundColor: '#FED80E',
    borderColor: '#FED80E',
    overflow: 'hidden',
  },
  btnText: {
    textAlign: 'center',
    color: '#393939',
    fontSize: 16,
  },
  registerBtn: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 40,
    color: '#6685db',
    fontSize: 16,
  },
  seePwdBtn: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dynPwdBtn: {
    borderWidth: 0,
    color: '#6685db',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  navBarTextLeftIcon: {
    marginLeft: 15,
    fontSize: 37,
    color: '#000',
    width: 100,
  },
});

SignInPage.propTypes = {};
SignInPage.defaultProps = {};

export default React.memo(SignInPage);
