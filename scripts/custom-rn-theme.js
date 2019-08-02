/* eslint-disable */
const path = require('path');
const fs = require('fs');

const defaultVars = require('@ant-design/react-native/lib/style/themes/default');
const customVars = require('../src/config/theme');

const themePath = path.resolve(require.resolve('@ant-design/react-native'), '../style/themes/default.js');
const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'let brandPrimary = "#108ee9"; let brandPrimaryTap = "#1284d6";module.exports = ' + JSON.stringify(themeVars)
  );
}
