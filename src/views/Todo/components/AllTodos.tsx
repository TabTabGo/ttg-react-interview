import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { Task } from '../../../types/Task';
import TaskService from '../../../services/TasksService';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flex: 1,
    },
    listItem: {
      textAlign: 'center',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#D5D5D5',
      borderRadius: '6px',
      padding: '4px',
      width: '100%',
    },
    icon: {
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.secondary.dark,
        transform: 'scale(1.2)',
      },
      transition: 'transform 0.2s',
    },
    scrollableList: {
      maxHeight: '400px',
      overflowY: 'auto',
    },
  })
);

type RemoveToDoProps = {
  onRemoveTask?: (id: number) => void;
};

const AllTodos = ({ onRemoveTask }: RemoveToDoProps) => {
  const classes = useStyles();
  const [todos, setTodos] = useState<Task[]>([]);
  const taskService = new TaskService();
  const tasksFromStore = useSelector((state: any) => state.todo.current.todo);

  useEffect(() => {
    const tasks = taskService.getTasks();
    if (tasks.length > 0) {
      setTodos(tasks);
    } else {
      setTodos(tasksFromStore);
    }
  }, [tasksFromStore]);

  const handleRemoveTask = (index: number) => {
    if (onRemoveTask) {
      onRemoveTask(index);
    }
  };

  return (
    <Box className={classes.root}>
      <List className={classes.scrollableList}>
        {todos.map((todo: Task, index: number) => (
          <ListItem className={classes.listItem} key={index}>
            <Box className={classes.item}>
              <ListItemText primary={todo.title} />
              <Box onClick={() => handleRemoveTask(index)}>
                <DeleteIcon className={classes.icon} color="secondary" />
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AllTodos;
