import { Dispatch } from 'redux';
import { Task } from '../../types/Task';

export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
};

export const TodoActions = {
  addTodo: (todo: Task) => {
    return {
      type: TodoActionTypes.addTodo,
      payload: todo,
    };
  },

  deleteTodo: (newTodos: Task[]) => {
    return {
      type: TodoActionTypes.deleteTodo,
      payload: newTodos,
    };
  },
};
