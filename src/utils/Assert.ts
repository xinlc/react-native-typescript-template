export const assert = (condition: boolean, msg: string) => {
  if (!condition) {
    throw new Error(msg);
  }
};

export const expect200 = (res: { code: number; message: string }) => {
  if (res && res.code && res.code === 200) return;
  throw new Error(res.message);
};
