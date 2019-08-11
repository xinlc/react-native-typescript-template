
/* eslint-disable */
const modulePaths = require('./modulePaths');
const resolve = require('path').resolve;
const fs = require('fs');

const config = {
  getTransformOptions: () => {
    const moduleMap = {};
    modulePaths.forEach(path => {
      if (fs.existsSync(path)) {
        moduleMap[resolve(path)] = true;
      }
    });
    return {
      preloadedModules: moduleMap,   // 配置预加载模块
      transform: { inlineRequires: { blacklist: moduleMap } },
    };
  },
};

module.exports = config;