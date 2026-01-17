import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from '../components/AddTodo';
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';
import AllTodos from '../components/AllTodos';
import { Box } from '@material-ui/core';
import TaskService from '../../../services/TasksService';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around',
      minHeight: '70vh',
    },
  })
);

const TodoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const taskService = new TaskService(); // Create an instance of TaskService
  const tasks = taskService.getTasks();
console.log(tasks);

  const onAddTask = (todo: { id: number; title: string })=>{
    dispatch(addTodo(todo)); 
    taskService.addTask(todo)
  }

  const onRemoveTask = (index:number)=>{
    dispatch(deleteTodo(index));
    taskService.removeTask(index)
  }
  return (
    <Box className={classes.root}>
      <AllTodos onRemoveTask={onRemoveTask}/>
      <AddTodo onAddTask={onAddTask} />
    </Box>
  );
};

export default TodoList;
