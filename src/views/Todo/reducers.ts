import { TodoActionTypes } from './actions';
import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { indexOf } from 'lodash';

let defaultState = {
  todo:[  'walking','reading']
}

;

const todoReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'addTodo':
      console.log(state.todo)

      return  {...state,todo:[...state.todo,action.payload]}
    case 'deleteTodo': {
      return {...state.todo.splice(action.payload, 1),todo:[...state.todo]};
    }

    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
