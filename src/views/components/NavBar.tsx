import { AppBar, Toolbar, Typography, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/img/logo.png';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    logo: {
      width: 120,
    },
    appBar: {
      marginBottom: theme.spacing(4),
    },
  })
);

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <img className={classes.logo} alt="TabTabGo Logo" src={logo} />
        <Typography variant="h6" style={{ marginLeft: 'auto' }}>
          Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
