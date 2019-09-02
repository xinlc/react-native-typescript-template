
# react-native-typescript-template

[Getting started guide](https://xinlc.github.io/2019/08/03/front-end/rn/rn-zero-to-one/#more)

## Installation

```bash
# react-native link
# react-native link @ant-design/icons-react-native
yarn install
cd ios & pod install
```

## Usage

```bash

# Development server
yarn start

# Build dev
# APK in android/app/build/outputs/apk/
react-native run-android 

react-native run-ios

# Build release
bash scripts/android_build.sh [version] [index] [test|release]
```

## Debugger
```bash
react-devtools
adb reverse tcp:8097 tcp:8097

adb devices
adb -s <device name> reverse tcp:8081 tcp:8081
adb reverse tcp:8081 tcp:8081

adb shell input keyevent 82

npm start -- --reset-cache

react-native log-ios
react-native log-android
```

## VSCode
推荐安装：
- `ESLint`
- `Prettier`
- `TabNine`
- `Reactjs code snippets`
- `React-Native/React/Redux snippets for es6/es7`
- `Project Manager`
- `Search node_modules`
- `Guides`
- `Color Highlight`
- `vscode-icons`
- `Import Cose`

添加配置如下：
```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]

}
```

## Documents
- [react](https://reactjs.org/)
- [react-native](https://facebook.github.io/react-native/)
- [react-native-components](https://facebook.github.io/react-native/docs/view)
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
- [react-navigation](https://reactnavigation.org/docs/en/getting-started.html)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [ant-design-mobile](https://mobile.ant.design/index-cn)
- [redux](https://github.com/reactjs/redux)
- [redux-cn](https://www.redux.org.cn)
- [react-redux-cn](http://cn.redux.js.org/docs/react-redux/)
- [react-redux](https://react-redux.js.org/)
- [redux-sage](https://redux-saga-in-chinese.js.org)
- [iron-redux](https://github.com/nefe/iron-redux)
- [redux-actions](https://github.com/redux-utilities/redux-actions)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [TypeSearch](https://github.com/Microsoft/TypeSearch)
- [axios](https://github.com/axios/axios)
- [immutable](https://github.com/immutable-js/immutable-js)
- [moment](https://github.com/moment/moment/)
- [lodash](https://www.lodashjs.com/docs/latest)
- [yarn](https://github.com/yarnpkg/yarn)