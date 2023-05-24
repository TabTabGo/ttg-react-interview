import { combineReducers } from 'redux';

import TodoReducer from '../views/Todo/redux/reducers';

const appReducers = combineReducers({
  todo: TodoReducer,
});

const rootReducers = (state: any, action: any) => {
  // Handle general reducers
  return appReducers(state, action);
};

export default rootReducers;
