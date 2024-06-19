import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, List, ListItem, ListItemText, IconButton, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddTaskForm from '../components/AddTaskForm';
import { TodoActions } from '../../../reducers/stores/actions';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      // backgroundColor: '#1976d2',
      //  height: '100vh',
    },
    list: {
      width: '100%',
      maxWidth: 360,
      marginTop: theme.spacing(2),
    },
    listItem: {
      marginBottom: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1),
      backgroundColor: '#fff',
      borderRadius: theme.shape.borderRadius * 2,
    },
  })
);

const TodoList = () => {
  const classes = useStyles();
  const tasks = useSelector((state: any) => state.tasks || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoActions.getTodosAction());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(TodoActions.removeTodoAction(id));
  };

  return (
    <Box className={classes.root}>
      <AddTaskForm />
      <List className={classes.list}>
        {tasks.length > 0 ? (
          tasks.map((task: any) => (
            <Paper key={task.id} className={classes.listItem}>
              <ListItemText primary={task.title} />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(task.id)}>
                <DeleteIcon />
              </IconButton>
            </Paper>
          ))
        ) : (
          <Paper className={classes.listItem}>
            <ListItemText primary="No tasks available" />
          </Paper>
        )}
      </List>
    </Box>
  );
};

export default TodoList;
