import { handleAction } from 'redux-actions';
import { INCREMENT } from './actions';

const defaultState = { count: 1 };
const reducer = handleAction(
  INCREMENT,
  (state, action: any) => ({
    count: state.count + action.payload,
  }),
  defaultState
);

export default reducer;
