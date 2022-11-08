import prodStore from './store.prod';
import devStore from './store.dev';
import TaskService from '../../services/TasksService';

let Store;
if (process.env.NODE_ENV === 'production') {
  Store = prodStore;
} else {
  Store = devStore;
}
const Service = new TaskService();
let preLoadState = {
  todo: {
    current: {
      tasks: Service.getTasks(),
    },
  },
};
console.log('bla bla', preLoadState);
export default Store(preLoadState);
