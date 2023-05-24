import { Dispatch } from 'redux';
import { ITask } from '../../../interfaces/ITask';
import TaskService from '../../../services/TasksService';

const taskService = new TaskService();

export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
};

export class TodoActions {
  addTodo =
    ({ title, description }: { title: string; description?: string }) =>
    (dispatch: Dispatch, getState: any) => {
      const {
        todo: {
          current: { todos },
        },
      } = getState();

      const todo = { id: todos.length, title, description };

      taskService.addTask(todo);

      dispatch({
        type: TodoActionTypes.addTodo,
        payload: [todo, ...todos],
      });
    };

  removeTodo = (id: number) => (dispatch: Dispatch, getState: any) => {
    const {
      todo: {
        current: { todos },
      },
    } = getState();

    taskService.removeTask(id);

    dispatch({
      type: TodoActionTypes.deleteTodo,
      payload: todos.filter((t: ITask) => t.id !== id),
    });
  };
}
