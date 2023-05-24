import * as React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TodoList from './containers/TodoList';

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212A3E ',
    borderRadius: '20px'
  },
  title: {
    color: "#9BA4B5"
  },
}));

const Todo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <h1 className={classes.title}>To Do App</h1>
        <TodoList />
      </Container>
    </div>
  );
};

export default Todo;
