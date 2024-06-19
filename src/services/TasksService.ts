import { Task } from '../types/Task';

class TaskService {
  // Key used for storing tasks in localStorage
  task_key = 'TASKS';

  // Constructor, currently not doing anything special
  constructor() {}

  // Load tasks from localStorage
  loadFromStorage(): Array<Task> {
    var stored = localStorage.getItem(this.task_key);
    // If tasks are found, parse and return them, otherwise return an empty array
    return stored ? JSON.parse(stored) : [];
  }

  // Save the given tasks array to localStorage
  commit(tasks: Array<Task>) {
    localStorage.setItem(this.task_key, JSON.stringify(tasks));
  }

  // Get all tasks from storage
  getTasks() {
    return this.loadFromStorage();
  }

  // Get a specific task by its id
  getTask(id: number) {
    var tasks = this.loadFromStorage();
    // Find and return the task with the matching id
    return tasks.find(t => t.id === id);
  }

  // Add a new task to the storage
  addTask(task: Task) {
    var tasks = this.loadFromStorage();
    // Add the new task to the array (assuming the task already has a unique id)
    tasks.push(task);

    // Save the updated tasks array to localStorage
    this.commit(tasks);
  }

  // Remove a task by its id
  removeTask(id: number) {
    var tasks = this.loadFromStorage();
    // Find the index of the task to be removed
    var index = tasks.findIndex(t => t.id === id);
    // If the task is found, remove it from the array
    if (index > -1) {
      tasks.splice(index, 1);
    }
    // Save the updated tasks array to localStorage
    this.commit(tasks);
  }
}

export default TaskService;
