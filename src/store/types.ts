/**
 * @author Leo
 * @email xinlichao2016@gmail.com
 * @create date 2019-09-03 10:04:03
 * @modify date 2019-09-03 10:04:03
 * @desc redux store type
 */
import { ReturnState } from 'iron-redux';
import { rootReducers } from './reducers';

export type RootState = ReturnState<typeof rootReducers>;
