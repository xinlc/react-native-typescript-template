import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const propTypes = {
  focused: PropTypes.bool,
  tabBarLabel: PropTypes.string,
  iconName: PropTypes.string,
};

const defaultProps = {
  focused: false,
  tabBarLabel: '',
  iconName: '',
};

// const TabIcon = ({ focused, title, iconName }) => {
const TabIcon = (props) => {
  const { focused, tabBarLabel, iconName } = props;
  return (
    <View style={styles.container}>
      <Icon
        name={focused ? iconName : iconName}
        size={20}
        style={{ color: focused ? '#3D7EFF' : '#666666' }}
      />
      <Text style={{ marginLeft: 1, color: focused ? '#3D7EFF' : '#666666' }}>{tabBarLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

TabIcon.propTypes = propTypes;
TabIcon.defaultProps = defaultProps;

export default TabIcon;
