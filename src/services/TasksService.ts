import { Task } from '../types/Task';

class TaskService {
  task_key = 'TASkS';

  constructor() { }

  loadFromStorage(): Array<Task> {
    var stored = localStorage.getItem(this.task_key);
    return stored ? JSON.parse(stored) : [];
  }

  commit(tasks: Array<Task>) {
    localStorage.setItem(this.task_key, JSON.stringify(tasks));
  }

  getTasks() {
    return this.loadFromStorage().reverse();
  }

  getTask(id: number): Task | null {
    var tasks = this.loadFromStorage();
    const task = tasks.find(t => t.id === id)
    return task || null;
  }

  addTask(task: Task): number {
    var tasks = this.loadFromStorage();
    const taskCreatedId = tasks.length + 1
    tasks.push({
      ...task,
      id: taskCreatedId,
    });
    this.commit(tasks);
    return taskCreatedId;
  }

  removeTask(id: number): boolean {
    var tasks = this.loadFromStorage();
    var index = tasks.findIndex(t => t.id === id);
    if (index > -1) {
      tasks.splice(index, 1);
      this.commit(tasks);
      return true;
    }
    return false;
  }
}

export default TaskService;
