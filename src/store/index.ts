import { create } from 'zustand';
import TaskService from '../services/TasksService';
import { Task } from '../types/Task';
import { PaletteType } from '@material-ui/core';

const services = new TaskService();

interface TodoState {
  tasks: Task[];
  theme: PaletteType;
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTheme: () => void;
}

export const useTodoStore = create<TodoState>(set => ({
  tasks: services.loadFromStorage(),
  theme: 'light',

  addTodo: (title: string) => {
    const newTask = { id: Math.random(), title };
    services.addTask(newTask);
    set(state => ({
      tasks: [...state.tasks, newTask],
    }));
  },

  removeTodo: (id: number) => {
    services.removeTask(id);
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    }));
  },

  toggleTheme: () => {
    set(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  },
}));
