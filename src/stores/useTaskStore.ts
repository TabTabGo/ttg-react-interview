import create from 'zustand';
import { Task } from '../types/Task';
import TaskService from '../services/TasksService';

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  loadTasks: (tasks: Task[]) => void;
};


const taskService = new TaskService();


export const useTaskStore = create<TaskStore>(set => ({
  tasks: new TaskService().getTasks() || [],
  addTask: task => {
    taskService.addTask(task);

    set(state => ({ tasks: [...state.tasks, task] }));
  },
  removeTask: id => {
    taskService.removeTask(id);

    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    }));
  },
  loadTasks: tasks => set({ tasks }),
}));
