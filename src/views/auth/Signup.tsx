import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// TODO: Use KeyboardAvoidingView
const SignupPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>signup</Text>
    </View>
  );
};

// TODO : Extract common code into a single style
const styles = StyleSheet.create({
  container: {
    flex: 1
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
    alignItems: 'stretch'
  },
  errorText: {
    color: 'red',
  },
  successText: {
    fontSize: 20,
    color: 'green',
  }
});

SignupPage.navigationOptions = {
  title: 'Signup'
};

export default SignupPage;
