import { Dispatch } from 'redux';

import TaskService from '../../services/TasksService';

// Create an instance of the TaskService to handle task-related operations
const taskService = new TaskService();

// Define action types as constants to avoid typos and for easier maintenance
export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
  getTodos: 'TODO/GET',
};

export class TodoActions {
  // Action to add a new todo
  static addTodoAction = (title: string) => {
    return (dispatch: Dispatch) => {
      // Create a new task object with a unique id based on the current timestamp
      const newTask = { title, id: new Date().getTime() };
      // Add the new task to the local storage
      taskService.addTask(newTask);
      // Dispatch an action to add the new task to the Redux store
      dispatch({ type: TodoActionTypes.addTodo, payload: newTask });
    };
  };

  // Action to remove a todo by its id
  static removeTodoAction = (id: number) => {
    return (dispatch: Dispatch) => {
      // Remove the task from the local storage
      taskService.removeTask(id);
      // Dispatch an action to remove the task from the Redux store
      dispatch({ type: TodoActionTypes.deleteTodo, payload: id });
    };
  };

  // Action to get all todos from the local storage
  static getTodosAction = () => {
    return (dispatch: Dispatch) => {
      // Retrieve all tasks from the local storage
      const tasks = taskService.getTasks();
      // Dispatch an action to set the tasks in the Redux store
      dispatch({ type: TodoActionTypes.getTodos, payload: tasks });
    };
  };
}
