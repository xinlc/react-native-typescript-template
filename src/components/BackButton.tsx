import React from 'react';
import {
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import CommonTouchable from './CommonTouchable';
import defaultBackImage from '../assets/icon/back-icon.png';

const Comp = ({ onPress, tintColor }) => {
  return (
    <CommonTouchable style={styles.back} onPress={onPress}>
      <Image
        style={[
          styles.icon,
          // !!backTitleVisible && styles.iconWithTitle,
          !!tintColor && { tintColor },
        ]}
        source={defaultBackImage}
        fadeDuration={0}
      />
    </CommonTouchable>
  );
};

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 10,
    left: 15,
    zIndex: 1,
  },
  icon: Platform.select({
    ios: {
      backgroundColor: 'transparent',
      height: 21,
      width: 13,
      marginLeft: 9,
      marginRight: 22,
      marginVertical: 12,
      resizeMode: 'contain',
      // transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      height: 24,
      width: 24,
      margin: 3,
      resizeMode: 'contain',
      backgroundColor: 'transparent',
      // transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  iconWithTitle:
    Platform.OS === 'ios'
      ? { marginRight: 6, }
      : { },
});


Comp.propTypes = {
  onPress: PropTypes.func,
  tintColor: PropTypes.string,
};

Comp.defaultProps = {
  onPress: () => {},
  tintColor: '#FFFFFF',
};

export default Comp;
