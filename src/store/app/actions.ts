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