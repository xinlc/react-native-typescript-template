/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 09:55:33
 * @modify date 2019-09-03 09:55:33
 * @desc 定义 Store Props Interface （暂时没用到，已用iron-redux 代替）
 */

import Store from './Store';

export default interface Props<S = any> {
  store: Store<S>;
  children: JSX.Element[] | JSX.Element;
}
