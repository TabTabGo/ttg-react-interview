import prodStore from './store.prod';
import devStore from './store.dev';
import TaskService from '../../services/TasksService';

const taskService = new TaskService();

let Store;
if (process.env.NODE_ENV === 'production') {
  Store = prodStore;
} else {
  Store = devStore;
}
let preLoadState = {
  todo: {
    current: {
      todos: taskService.getTasks(),
    },
  },
};
let StoreWithTypes = Store(preLoadState);

export type RootState = ReturnType<typeof StoreWithTypes.getState>;
export type AppDispatch = typeof StoreWithTypes.dispatch;

export default StoreWithTypes;
