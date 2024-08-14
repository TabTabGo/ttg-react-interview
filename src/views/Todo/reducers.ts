import { TaskActionPayloadTypes, TodoActionTypes } from './actions';
import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { Task } from '../../types/Task';
import TaskService from '../../services/TasksService';
import { PaletteType } from '@material-ui/core';

const services = new TaskService();
export interface TodoState {
  tasks: Task[];
  theme: PaletteType;
}

const defaultState: TodoState = {
  tasks: services.loadFromStorage(),
  theme: 'light',
};

const todoReducer = (state = defaultState, action: TaskActionPayloadTypes) => {
  switch (action.type) {
    case TodoActionTypes.addTodo: {
      const newTask = action.payload;
      return update(state, {
        tasks: { $push: [newTask] },
      });
    }
    case TodoActionTypes.deleteTodo: {
      const taskId = action.payload;
      return update(state, {
        tasks: { $apply: (tasks: Task[]) => tasks.filter((task: Task) => task.id !== taskId) },
      });
    }
    case TodoActionTypes.deleteTodo: {
      const taskId = action.payload;
      return update(state, {
        tasks: { $apply: (tasks: Task[]) => tasks.filter((task: Task) => task.id !== taskId) },
      });
    }
    case TodoActionTypes.toggleTheme: {
      return update(state, {
        theme: { $set: state.theme === 'light' ? 'dark' : 'light' },
      });
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
