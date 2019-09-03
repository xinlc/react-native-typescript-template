/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 09:49:35
 * @modify date 2019-09-03 09:49:35
 * @desc ListView 空数据提示
 */
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

Component.propTypes = {};
Component.defaultProps = {};

// export default React.memo(Component);
export default Component;
