/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// 多bundle下查看有多少模块已经加载，有多少模块在等待。
if (__DEV__) {
  const modules = require.getModules();
  const moduleIds = Object.keys(modules);
  const loadedModuleNames = moduleIds
    .filter(moduleId => modules[moduleId].isInitialized)
    .map(moduleId => modules[moduleId].verboseName);
  const waitingModuleNames = moduleIds
    .filter(moduleId => !modules[moduleId].isInitialized)
    .map(moduleId => modules[moduleId].verboseName);

  // make sure that the modules you expect to be waiting are actually waiting
  console.log(
    'loaded:',
    loadedModuleNames.length,
    'waiting:',
    waitingModuleNames.length
  );

  // grab this text blob, and put it in a file named packager/modulePaths.js
  console.log(`module.exports = ${JSON.stringify(loadedModuleNames.sort())};`);
  // console.log(`loadedModuleNames.module.exports = ${JSON.stringify(loadedModuleNames.sort())};`);
  // console.log(`waitingModuleNames.module.exports = ${JSON.stringify(waitingModuleNames.sort())};`);

  // require.Systrace.beginEvent = (message) => {
  //   if(message.includes(problematicModule)) {
  //     throw new Error();
  //   }
  // }
}