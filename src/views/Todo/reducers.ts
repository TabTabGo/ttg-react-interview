import { combineReducers } from 'redux';
import { Task } from '../../types/Task';
import { ACTIONS_TYPE } from './actions';

export type TodoState = {
  tasks: Array<Task>;
};

const defaultState: TodoState = {
  tasks: [],
};

const todoReducer = (state: TodoState = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_TODOS_ACTION: {
      return {
        tasks: action.payload,
      };
    }
    case ACTIONS_TYPE.ADD_TODO_ACTION:
      return {
        tasks: [action.payload, ...state.tasks],
      };

    case ACTIONS_TYPE.REMOVE_TODO_ACTION: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload)
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
