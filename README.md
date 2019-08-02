
# react-native-typescript-template

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

```

## TypeScript
```bash
yarn add --dev typescript
yarn add --dev react-native-typescript-transformer
yarn tsc --init --pretty --jsx react
touch rn-cli.config.js
yarn add --dev @types/react @types/react-native
```

## Documents
- [react-native](https://facebook.github.io/react-native/)
- [react-native-components](https://facebook.github.io/react-native/docs/view)
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
- [react-navigation](https://reactnavigation.org/docs/en/getting-started.html)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [ant-design-mobile](https://mobile.ant.design/index-cn)
- [redux](https://github.com/reactjs/redux)
- [redux-cn](https://www.redux.org.cn)
- [react-redux](http://cn.redux.js.org/docs/react-redux/)
- [redux-sage](https://redux-saga-in-chinese.js.org)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [TypeSearch](https://github.com/Microsoft/TypeSearch)
- [axios](https://github.com/axios/axios)
- [immutable](https://github.com/immutable-js/immutable-js)
- [moment](https://github.com/moment/moment/)
- [lodash](https://www.lodashjs.com/docs/latest)
- [yarn](https://github.com/yarnpkg/yarn)