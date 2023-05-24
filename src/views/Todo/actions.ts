import { Dispatch } from 'redux';
import { Task } from '../../types/Task';

export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
};

export class TodoActions {
  static addTodo = (newTodo: Task) => (dispatch: Dispatch) => {
    dispatch({
      type: TodoActionTypes.addTodo,
      payload: newTodo,
    });
  };

  static deleteTodo = (id: number) => (dispatch: Dispatch) => {
    dispatch({
      type: TodoActionTypes.deleteTodo,
      payload: id,
    });
  };
}