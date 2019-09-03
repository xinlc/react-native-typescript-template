/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 09:58:45
 * @modify date 2019-09-03 09:58:45
 * @desc App reducer 和 saga type
 */
import {
  composeTypes,
} from 'iron-redux';

/**
 * 定义 types
 */
const prefix = 'app/';

enum BasicTypes {
  initializeApp,
}

enum FetchTypes {
}

const Types = composeTypes({
  prefix,
  BasicTypes,
  FetchTypes,
});

export { Types, prefix };
