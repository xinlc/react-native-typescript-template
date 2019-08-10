import { ReturnState } from 'iron-redux';
import { rootReducers } from './reducers';

export type RootState = ReturnState<typeof rootReducers>;
