import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../views/components/Header/Header';
import Footer from 'views/components/Footer/Footer';
import { useStyles } from './styles';
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const styles = useStyles();
  return (
    <>
      <Box display="flex" flexDirection="column" className={styles.root}>
        <Header />
        <Box display="flex" flex={1} justifyContent="center">
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
