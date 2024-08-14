import * as React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TodoList from './containers/TodoList';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'grid',
    minHeight: 'calc(100vh-36px)',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 'none',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  titleContainer: {
    height: '100%',
    paddingTop: '20%',
  },
  title: {
    color: theme.palette.type === 'light' ? theme.palette.grey[900] : theme.palette.grey[50],
    [theme.breakpoints.up('md')]: { fontSize: '2.5rem' },
    fontSize: '2rem',
    textTransform: 'capitalize',
  },
  description: {
    [theme.breakpoints.up('md')]: { fontSize: '1.8rem' },
    fontSize: '1.6rem',
    textTransform: 'capitalize',
    color: theme.palette.grey[400],
    paddingBottom: '2rem',
    borderBottom: '1px solid ',
    maxWidth: '400px',
    borderBottomColor:
      theme.palette.type === 'light' ? theme.palette.grey[900] : theme.palette.grey[50],
  },
}));

const Todo = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title}>TabTAbGo Todo App</Typography>
        <Typography className={classes.description}>manage your Daily Activities</Typography>
      </Box>
      <TodoList />
    </Container>
  );
};

export default Todo;
