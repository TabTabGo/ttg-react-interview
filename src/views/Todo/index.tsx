import * as React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TodoList from './containers/TodoList/TodoList';

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const Todo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <TodoList />
      </Container>
    </div>
  );
};

export default Todo;
