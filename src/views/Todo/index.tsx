import * as React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TodoList from './containers/TodoList';

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    background: 'rgba(128, 128, 128, 0.3)',
    border: '2px solid lightgrey',
    borderRadius: '20px',
  },
}));

const Todo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <h1>To Do App</h1>
        <TodoList />
      </Container>
    </div>
  );
};

export default Todo;
