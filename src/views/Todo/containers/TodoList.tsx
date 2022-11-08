import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from '../components/AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions } from '../actions';
import { Task } from '../../../types/Task';
import { State } from '../../../reducers/rootReducers';
import ViewTodos from '../components/ViewTodos';
import TaskService from '../../../services/TasksService';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
);

const TodoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let tasks = useSelector((state: State) => state.todo.current.tasks);
  let Service = new TaskService();
  useEffect(() => {
    tasks = Service.getTasks();
    console.log(tasks);
    console.log('hi');
  }, []);
  const onAddTask = (payload: Task) => {
    dispatch(TodoActions.addTodo(payload));
    Service.addTask(payload);
  };

  const OnRemoveTask = (id: number) => {
    let newTasks = tasks.filter((task: Task) => task.id !== id);
    dispatch(TodoActions.deleteTodo(newTasks));
    Service.removeTask(id);
  };
  return (
    <div className={classes.root}>
      {console.log(tasks)}
      <AddTodo onAddTask={onAddTask} />
      <ViewTodos tasks={tasks} onRemoveTask={OnRemoveTask} />
    </div>
  );
};

export default TodoList;
