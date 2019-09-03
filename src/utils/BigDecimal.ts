/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 10:05:01
 * @modify date 2019-09-03 10:05:01
 * @desc 高精度计算，建议使用 https://github.com/MikeMcl/decimal.js
 */
/**
 *
 * 乘法函数，用来得到精确的乘法结果
 * 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 * 调用：accMul(arg1,arg2)
 * @param arg1
 * @param arg2
 * @returns arg1乘以arg2的精确结果
 * @author Leo
 */
function accMul(arg1: number, arg2: number) {
  let m = 0;
  let s1 = arg1.toString();
  let s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
    Math.pow(10, m)
  );
}

export { accMul };
