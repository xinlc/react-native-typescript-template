/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 10:06:50
 * @modify date 2019-09-03 10:06:50
 * @desc 通用工具类
 */

const sleep = (time: number) => new Promise(resolve => setTimeout(() => resolve(), time));


/**
 * 指定时间内只能调用一次
 * @param functionTobeCalled 被包装的方法
 * @param interval 时间间隔，可省略，默认600毫秒
 */
let isCalled = false;
let timer: any;
const callOnceInInterval = (functionTobeCalled: () => void, interval = 600) => {
  if (!isCalled) {
    isCalled = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      isCalled = false;
    }, interval);
    return functionTobeCalled();
  }
  return null;
};

export {
  sleep,
  callOnceInInterval
};
