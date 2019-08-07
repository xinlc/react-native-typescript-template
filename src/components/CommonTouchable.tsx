import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-native-button';

const ACTIVE_OPACITY = 0.5;

const defaultProps = {
  interval: 350,
  callOnce: true, // interval 内 只调用一次，避免用户快速点击出现的种种问题.
  onPress: () => {}
};

// export interface Props {
//   interval?: number;
//   callOnce?: boolean;
//   onPress?: () => void;
//   style?: any;
// }

type Props = {
  interval?: number;
  callOnce?: boolean;
  onPress?: () => void;
  style?: any;
  textStyle?: any;
  buttonTheme?: 'default' | 'orange' | 'gray';
} & typeof defaultProps;

interface State {}

/**
 * 通用按钮
 * param style
 * param textStyle
 * param buttonTheme
 */
export default class CommonTouchable extends PureComponent<Props, State> {

  public static defaultProps = defaultProps;
  // public static defaultProps: Partial<Props> = {
  //   interval: 350,
  //   callOnce: true, // interval 内 只调用一次，避免用户快速点击出现的种种问题.
  //   onPress: () => {},
  // }

  public lastClickTime: number;

  public constructor(props: Props) {
    super(props);
    this.state = {};
    this.lastClickTime = 0;
  }

  private _onPress = () => {
    const { interval, callOnce, onPress } = this.props;
    if (!callOnce) {
      onPress();
      return;
    }
    const clickTime = Date.now();
    // 350 的时间可以延长，根据需要改变
    if (
      !this.lastClickTime ||
      Math.abs(this.lastClickTime - clickTime) > interval
    ) {
      this.lastClickTime = clickTime;
      if (onPress) {
        onPress();
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public render() {
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
      borderColor: '#fff',
    },
    text: {
      color: '#fbb307',
      fontWeight: 'bold',
    },
  },
  orange: {
    btn: {
      backgroundColor: '#FED80E',
      borderColor: '#FED80E',
    },
    text: {
      color: '#393939',
      fontWeight: 'bold',
    },
  },
  gray: {
    btn: {
      backgroundColor: '#f3f3f3',
      borderColor: '#f3f3f3',
    },
    text: {
      color: '#fbb307',
      fontWeight: 'bold',
    },
  },
};


// 解决 ts 不能识别类组件defaultProps问题(函数组件没有问题)

// 1.
// type Props = {
//   foo?: string;
//   bar: string;
// } & typeof defaultProps; // <-- give the type of const defaultProps

// const defaultProps = { foo: 'foo!' }

// export default class FooBar extends Component<Props> {
//   public static defaultProps = defaultProps;
//   public render() {
//     const foo = this.props.foo;
//     const bar = this.props.bar;
//     return <Text>{`${foo} ${bar}`}</Text>;
//   }
// }

// 2.
// type defaultProps = Required<Pick<Props, 'foo'>>;

// // implement the type
// const defaultProps: defaultProps = {
//   foo: 'foo!'
// };
// // Note: you can also use Object.freeze:
// const defaultPropsFreezed = Object.freeze<defaultProps>({
//   foo: 'foo!'
// })

// class FooBar extends Component<Props & defaultProps> {


// 3.
// type defaultProps = Required<Pick<Props, 'foo'>>;
// const defaultProps = Object.freeze<defaultProps>({
//   foo: 'foo!'
// })

// export default class FooBar extends Component<Props> {
//   public static defaultProps = defaultProps;
//   private get dProps() {
//     return this.props as Props & defaultProps;
//   }
