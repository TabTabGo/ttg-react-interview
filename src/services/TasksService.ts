import { ITask } from '../interfaces/ITask';

class TaskService {
  task_key = 'TASkS';

  constructor() {}

  loadFromStorage(): Array<ITask> {
    var stored = localStorage.getItem(this.task_key);
    return stored ? JSON.parse(stored) : [];
  }

  commit(tasks: Array<ITask>) {
    localStorage.setItem(this.task_key, JSON.stringify(tasks));
  }

  getTasks() {
    return this.loadFromStorage();
  }

  getTask(id: number) {
    var tasks = this.loadFromStorage();
    return tasks.find(t => t.id === id);
  }

  addTask(task: ITask) {
    var tasks = this.loadFromStorage();
    tasks.push({
      ...task,
      id: tasks.length + 1,
    });
    this.commit(tasks);
  }

  removeTask(id: number) {
    var tasks = this.loadFromStorage();
    var index = tasks.findIndex(t => t.id === id);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    this.commit(tasks);
  }
}

export default TaskService;
