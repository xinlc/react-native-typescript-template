import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-native-button';

const ACTIVE_OPACITY = 0.5;

/**
 * 通用按钮
 * param style
 * param textStyle
 * param buttonTheme
 */
export default class CommonTouchable extends PureComponent {
  static propTypes = {
    interval: PropTypes.number,
    callOnce: PropTypes.bool,
  };

  static defaultProps = {
    interval: 350,
    callOnce: true, // interval 内 只调用一次，避免用户快速点击出现的种种问题.
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.lastClickTime = 0;
  }

  _onPress = () => {
    const { interval, callOnce, onPress } = this.props;
    if (!callOnce) {
      onPress();
      return;
    }
    const clickTime = Date.now();
    // 350 的时间可以延长，根据需要改变
    if (!this.lastClickTime || Math.abs(this.lastClickTime - clickTime) > interval) {
      this.lastClickTime = clickTime;
      if (onPress) {
        onPress();
      }
    }
  };

  render() {
    let { children, style, textStyle, buttonTheme, ...other } = this.props;
    if (buttonTheme && Styles[buttonTheme]) {
      style = [style, Styles[buttonTheme].btn];
      textStyle = [textStyle, Styles[buttonTheme].text];
    }
    return (
      <Button
        activeOpacity={ACTIVE_OPACITY}
        {...other}
        onPress={this._onPress}
        containerStyle={style}
        style={textStyle}
      >
        {children}
      </Button>
    );
  }
}

const Styles = {
  default: {
    btn: {
      backgroundColor: '#fff',
      borderColor: '#fff'
    },
    text: {
      color: '#fbb307',
      fontWeight: 'bold'
    }
  },
  orange: {
    btn: {
      backgroundColor: '#FED80E',
      borderColor: '#FED80E'
    },
    text: {
      color: '#393939',
      fontWeight: 'bold'
    }
  },
  gray: {
    btn: {
      backgroundColor: '#f3f3f3',
      borderColor: '#f3f3f3'
    },
    text: {
      color: '#fbb307',
      fontWeight: 'bold'
    }
  }
};
