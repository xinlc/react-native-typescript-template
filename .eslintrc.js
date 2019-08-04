module.exports = {
  root: true,
  extends: [
    // '@react-native-community',
    'eslint-config-alloy/typescript',
  ],
  // parser: 'typescript-eslint-parser',
  plugins: [
    // 'typescript',
    // 'prettier'
  ],
  globals: {
    '__DEV__': true,
    'global': true,
  },
  rules: {
    // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    // 'eqeqeq': [
    //   'error',
    //   'always',
    //   {
    //     null: 'ignore'
    //   }
    // ],
    // @fixable 一个缩进必须用两个空格替代
    'indent': [
      'error',
      2,
      { SwitchCase: 1, flatTernaryExpressions: true }
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
      { SwitchCase: 1, flatTernaryExpressions: true }
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    'no-tabs': 'off',
  }
};
