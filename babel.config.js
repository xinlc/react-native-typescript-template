module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['import', { libraryName: '@ant-design/react-native' }] // 按需加载
  ],
  env: {
    production: {
      plugins: [
        'transform-remove-console',
      ],
    }
  }
};
