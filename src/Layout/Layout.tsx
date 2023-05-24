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
      <div className={styles.root}>
        <Header />
        <div className={styles.toolBarMargin}></div>
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
