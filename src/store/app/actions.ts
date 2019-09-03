/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 09:56:53
 * @modify date 2019-09-03 09:56:53
 * @desc App actions，初始化app，升级等。
 */
import {
  createAction,
} from 'iron-redux';
import { Types } from './types';

/**
 |--------------------------------------------------
 | DEFINE REDUCER ACTION INTERFACE
 |--------------------------------------------------
 */

export default {
};

/**
 |--------------------------------------------------
 | DEFINE SERVICE ACTION INTERFACE
 |--------------------------------------------------
 */

export const initializeApp = createAction(Types.initializeApp)();