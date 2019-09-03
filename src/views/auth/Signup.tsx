/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 10:07:49
 * @modify date 2019-09-03 10:07:49
 * @desc 注册页，未完善
 */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// TODO: Use KeyboardAvoidingView
const SignupPage = () => {
  return (
    <View style={styles.container}>
      <Text>signup</Text>
    </View>
  );
};

// TODO : Extract common code into a single style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultMargin: {
    marginTop: 16,
  },
  center: {
    alignSelf: 'center',
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  errorText: {
    color: 'red',
  },
  successText: {
    fontSize: 20,
    color: 'green',
  },
});

SignupPage.navigationOptions = {
  title: 'Signup',
};

export default React.memo(SignupPage);
