import { combineReducers } from 'redux';

import TodoReducer, { TodoState } from '../views/Todo/reducers';

export interface RootState {
  todo: { current: TodoState };
}
const appReducers = combineReducers({
  todo: TodoReducer,
});

const rootReducers = (state: any, action: any) => {
  // Handle general reducers
  return appReducers(state, action);
};

export default rootReducers;
