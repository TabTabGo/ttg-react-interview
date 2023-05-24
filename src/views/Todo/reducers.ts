import { Task } from '../../types/Task';
import { TodoActionTypes } from './actions';
import update from 'immutability-helper';
import { combineReducers } from 'redux';

interface InitialState {
  todos: string[];
}
interface AddTodoAction {
  type: string;
  payload: Task;
}

interface DeleteTodoAction {
  type: string;
  payload: number;
}
const defaultState = { todos: []};

type TodoAction = AddTodoAction | DeleteTodoAction;

const todoReducer = (state: InitialState = defaultState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TodoActionTypes.deleteTodo: 
    return {
      ...state,
      todos: state.todos.filter((_, index) => index !== action.payload),
    };
    
    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
