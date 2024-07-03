import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from '../components/AddTodo';
import TaskList from '../components/TaskList';
import { Paper, Typography } from '@material-ui/core';
import { useTaskStore } from '../../../stores/useTaskStore';
import TaskService from '../../../services/TasksService';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3],
      margin: '1rem',
    },
    title: {
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main,
    },
  })
);

const TodoList = () => {
  const classes = useStyles();
  const taskService = new TaskService();

  const removeTask = useTaskStore(state => state.removeTask);
  const loadTasks = useTaskStore(state => state.loadTasks);
  const tasks = useTaskStore(state => state.tasks);

  const handleAddTask = () => {
    loadTasks(taskService.getTasks());
  };

  const handleDeleteTask = (id: number) => {
    removeTask(id);
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        My Todo List
      </Typography>

      <AddTodo onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </Paper>
  );
};

export default TodoList;
