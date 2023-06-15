import { Dispatch } from 'redux';

export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
  switchMode: 'TODO/DARK',
};

export const addTodo = (newTodo: { id: number; title: string }) => (dispatch: Dispatch) =>
  dispatch({ type: TodoActionTypes.addTodo, payload: newTodo });

export const deleteTodo = (id: number) => (dispatch: Dispatch) =>
  dispatch({ type: TodoActionTypes.deleteTodo, payload: id });

  export const switchMode = () => (dispatch: Dispatch) =>
  dispatch({ type: TodoActionTypes.switchMode });