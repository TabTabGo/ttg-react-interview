import { Box, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../assets/img/logo.png';
import ThemeToggler from './Todo/components/theme-toggler';
import { useDispatch } from 'react-redux';
import { TodoActions } from './Todo/actions';
import { useTodoStore } from '../store';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: 'relative',
      zIndex: 99,
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
    },

    logo: {
      width: 120,
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const { toggleTheme } = useTodoStore();
  const handleToggleTheme = () => {
    toggleTheme();
  };
  return (
    <Box className={classes.root}>
      <img className={classes.logo} src={logo} alt="TabTabGo Logo" />
      <ThemeToggler toggleTheme={handleToggleTheme} />
    </Box>
  );
}
