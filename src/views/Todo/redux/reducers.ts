import { TodoActionTypes } from './actions';
import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { ITodoReducerDefaultState } from '../../../interfaces/ITodoReducerDefaultState';


const defaultState: ITodoReducerDefaultState = {
  todos: [],
};

const todoReducer = (
  state = defaultState,
  action: { type: keyof typeof TodoActionTypes; payload: any }
) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      return { todos: action.payload };
    case TodoActionTypes.deleteTodo: {
      return { todos: action.payload };
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
