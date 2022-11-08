import { AppBar, Toolbar, Box, makeStyles, createStyles } from '@material-ui/core';
import Logo from '../../assets/img/logo.png';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: '#0a0a0a',
      heigh: '100px',
      padding: '25px 10px',
    },
  })
);
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <Box display="flex" alignContent="center">
          <img src={Logo} style={{ width: '160px' }} alt="TabTabGo Logo" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
