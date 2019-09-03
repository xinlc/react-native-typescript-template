/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 10:04:46
 * @modify date 2019-09-03 10:04:46
 * @desc 断言
 */
export const assert = (condition: boolean, msg: string) => {
  if (!condition) {
    throw new Error(msg);
  }
};

export const expect200 = (res: { code: number; message: string }) => {
  if (res && res.code && res.code === 200) return;
  throw new Error(res.message);
};
