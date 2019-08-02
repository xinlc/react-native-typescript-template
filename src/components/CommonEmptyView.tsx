import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Component = () => (
  <View style={styles.container}>
    <Text>
      还没有数据哦
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

Component.propTypes = {

};
Component.defaultProps = {

};

export default Component;
