import { Dispatch } from 'redux';
import { Task } from '../../types/Task';
import TaskService from '../../services/TasksService';

export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
  toggleTheme: 'TODO/TOGGLE_THEME',
} as const;

export type TaskActionPayloadTypes =
  | { type: typeof TodoActionTypes.addTodo; payload: Task }
  | { type: typeof TodoActionTypes.deleteTodo; payload: number }
  | { type: typeof TodoActionTypes.toggleTheme };

const services = new TaskService();
export class TodoActions {
  addTodo = (title: string) => (dispatch: Dispatch) => {
    const task = { id: Math.random(), title };
    services.addTask(task);
    dispatch({
      type: TodoActionTypes.addTodo,
      payload: task,
    });
  };

  removeTodo = (id: number) => (dispatch: Dispatch) => {
    services.removeTask(id);
    dispatch({
      type: TodoActionTypes.deleteTodo,
      payload: id,
    });
  };
  toggleTheme = () => (dispatch: Dispatch) => {
    dispatch({
      type: TodoActionTypes.toggleTheme,
    });
  };
}
