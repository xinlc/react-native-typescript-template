import React from 'react';
import { Dimensions, View, Text, ActivityIndicator } from 'react-native';

const { width: _width, height: _height } = Dimensions.get('window');

const LoadingSpinner = ({
  width,
  height,
  spinnerColor,
  textColor,
  text,
}: any) => {
  return (
    <View
      style={{
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator color={spinnerColor} />
      <View style={{ height: 10 }} />
      <Text style={{ color: textColor }}>{text}</Text>
    </View>
  );
};

LoadingSpinner.propTypes = {};

LoadingSpinner.defaultProps = {
  width: _width,
  height: _height,
  spinnerColor: 'dimgray',
  textColor: 'dimgray',
  text: '',
};

export default LoadingSpinner;
