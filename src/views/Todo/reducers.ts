import { TodoActionTypes } from './actions';
import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { Task } from '../../types/Task';
type InitState = {
  todo: Task[];
  mode:boolean
}

const defaultState: InitState = {
  todo: [],
  mode:false
};
const todoReducer = (state: InitState=defaultState , action: any) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
  const { id, title } = action.payload;
  const newTodo = { id, title };
  return {
    ...state,
    todo: [...state.todo, newTodo],
  };
      case TodoActionTypes.deleteTodo: 
        const todoIndex = action.payload;
        const updatedTodo = [...state.todo];
        updatedTodo.splice(todoIndex, 1);
        return {
          ...state,
          todo: updatedTodo
        };
      case TodoActionTypes.switchMode: 
      return {
        ...state,
        mode:!state.mode
      };
    
      default:
        return state;
    }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
