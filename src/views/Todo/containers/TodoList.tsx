import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from '../components/AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions } from '../actions';
import { selectTodos } from '../selectors';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from '@material-ui/core';
import React from 'react';
import { useTodoStore } from '../../../store';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: '100%',
      paddingTop: '20%',
    },
    listItem: {
      marginBottom: '10px',
    },
    paper: {
      padding: '10px',
      marginTop: '4px',
    },
    itemText: { maxWidth: 'calc(100% - 90px)', wordBreak: 'break-word' },
    title: {
      fontWeight: 'bold',
    },
    deleteButton: {
      marginLeft: 'auto',
    },
  })
);

const actions = new TodoActions();
const TodoList = () => {
  const classes = useStyles();
  const { addTodo, removeTodo, tasks } = useTodoStore();
  const handleAddTodo = (title: string) => {
    addTodo(title);
  };
  const handleDeleteTodo = (id: number) => {
    removeTodo(id);
  };
  return (
    <Box className={classes.root}>
      <AddTodo onAddTask={handleAddTodo} />
      <List>
        {React.Children.toArray(
          tasks.map(item => (
            <Paper className={classes.paper}>
              <ListItem className={classes.listItem}>
                <ListItemText
                  className={classes.itemText}
                  primaryTypographyProps={{ className: classes.title }}
                  primary={item.title}
                />
                <ListItemSecondaryAction>
                  <Button
                    color="secondary"
                    variant="contained"
                    aria-label="delete"
                    onClick={() => handleDeleteTodo(item.id)}
                  >
                    delete
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </Paper>
          ))
        )}
      </List>
    </Box>
  );
};

export default TodoList;
