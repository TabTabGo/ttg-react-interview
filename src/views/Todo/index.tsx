import * as React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TodoList from './containers/TodoList';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#F5F4F6 ',
    borderRadius: '15px'
  },

}));

const Todo = () => {
  const classes = useStyles();
  const mode = useSelector((state: any) => state.todo.current.mode);

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.container}  style={{ backgroundColor: mode ? '#F5F4F6' : '#2A303C' }} >
        <h1 style={{ color: mode ? 'black' : 'white' }}>To Do App</h1>
        <TodoList />
      </Container>
    </div>
  );
};

export default Todo;
