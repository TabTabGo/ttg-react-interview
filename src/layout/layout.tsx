import { Box, createStyles, makeStyles, PaletteType, useTheme } from '@material-ui/core';
import React, { ReactNode } from 'react';
import Header from '../views/header';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      padding: '1.2rem',
      boxSizing: 'border-box',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    },
    content: {
      display: 'flex',
    },
  })
);
interface ILayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: ILayoutProps) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Box flex={1}>{children}</Box>
    </Box>
  );
}
