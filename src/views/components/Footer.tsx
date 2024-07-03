import { Box, Typography, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    footer: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      textAlign: 'center',
    },
  })
);
const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} TabTabGo
      </Typography>
    </Box>
  );
};

export default Footer;
