/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 09:55:33
 * @modify date 2019-09-03 09:55:33
 * @desc 定义 Store Interface （暂时没用到，已用iron-redux 代替）
 */

export default interface Store<S = any> {
  middleware(...args: any[]): void;
  setState(f: ((state: S) => Partial<S>) | Partial<S>): void;
  subscribe(f: Function): () => void;
  getState(): S;
  reset(): void;
}
