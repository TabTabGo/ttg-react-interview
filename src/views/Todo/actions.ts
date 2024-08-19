import { Task } from './../../types/Task';



export enum ACTIONS_TYPE {
  SET_TODOS_ACTION = 'TODO/SET',
  ADD_TODO_ACTION = 'TODO/ADD',
  REMOVE_TODO_ACTION = 'TODO/REMOVE'
}

export class TodoActions {
  setTodos = (tasks: Array<Task>) => {
    return {
      type: ACTIONS_TYPE.SET_TODOS_ACTION,
      payload: tasks,
    };
  };

  addTodo = (task: Task) => {
    return {
      type: ACTIONS_TYPE.ADD_TODO_ACTION,
      payload: task,
    };
  };

  removeTodo = (id: number) => {
    return {
      type: ACTIONS_TYPE.REMOVE_TODO_ACTION,
      payload: id,
    };
  };
}

export default new TodoActions()