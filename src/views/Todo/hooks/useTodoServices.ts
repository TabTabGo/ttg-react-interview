/** @format */

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import todoActions from '../actions';
import TaskService from './../../../services/TasksService';
import { CreateTaskType, Task } from './../../../types/Task';

export const useTodoServices = () => {
    const taskService = new TaskService();
    const dispatch = useDispatch();

    const getListOfTods = useCallback(() => {
        dispatch(todoActions.setTodos(taskService.getTasks()))
    }, []);

    const addTodo = useCallback((newTask: CreateTaskType) => {
        const taskToAdd: Task = {
            ...newTask,
            id: 0 //will be correct when storage in database.
        }
        const createdTaskId = taskService.addTask(taskToAdd);
        //get created task from database.
        const createdTask = taskService.getTask(createdTaskId);
        //put created task in app state.
        createdTask && dispatch(todoActions.addTodo(createdTask))
    }, []);

    const deleteTodo = useCallback((todoId: number) => {
        const isDeleted = taskService.removeTask(todoId);
        //remove task from app state when isDeleted equal true.
        isDeleted && dispatch(todoActions.removeTodo(todoId))
    }, []);

    return {
        getListOfTods,
        addTodo,
        deleteTodo
    };
};
