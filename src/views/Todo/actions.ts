import { Dispatch } from 'redux';
import TaskService from '../../services/TasksService';
import { Task } from '../../types/Task';

export const TodoActionTypes = {
  ADD_TODO: 'TODO/ADD',
  DELETE_TODO: 'TODO/REMOVE',
  SET_TODOS: 'TODO/SET',
};

export class TodoActions {
  taskService = new TaskService();

  addTodo = (task: Task) => (dispatch: Dispatch) => {
    this.taskService.addTask(task);
    dispatch({
      type: TodoActionTypes.ADD_TODO,
      payload: task,
    });
  };

  removeTodo = (id: number) => (dispatch: Dispatch) => {
    this.taskService.removeTask(id);
    dispatch({
      type: TodoActionTypes.DELETE_TODO,
      payload: id,
    });
  };

  loadTodos = () => (dispatch: Dispatch) => {
    const tasks = this.taskService.getTasks();
    dispatch({
      type: TodoActionTypes.SET_TODOS,
      payload: tasks,
    });
  };
}
