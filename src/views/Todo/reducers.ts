import { TodoActionTypes } from './actions';
import update from 'immutability-helper';
import { combineReducers } from 'redux';

const defaultState = {
  tasks: [],
};

const todoReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TodoActionTypes.deleteTodo: {
      return {
        ...state,
        tasks: action.payload,
      };
    }

    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
