import TaskService from '../../services/TasksService';
import { Task } from '../../types/Task';
import { TodoActionTypes, TodoActions } from './actions';
import { combineReducers } from 'redux';

const defaultState: Task[] = new TaskService().getTasks() || [];

const todoReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [...state, action.payload];
    case TodoActionTypes.DELETE_TODO:
      return state.filter((task: Task) => task.id !== action.payload);
    case TodoActionTypes.SET_TODOS:
      return action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  tasks: todoReducer,
});

export default reducer;
