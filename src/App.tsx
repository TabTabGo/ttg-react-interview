import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, makeStyles, createStyles } from '@material-ui/core/styles';
import theme from './assets/jss/theme';
import { Box } from '@material-ui/core';
import LoadingPage from './views/components/LoadingPage';
import Todo from './views/Todo';
import packageJson from '../package.json';
import Header from './views/components/Header';

const history = createBrowserHistory({ basename: '.' });

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: '#394867'
    },
    logo: {
      width: 120,
    },
  })
);

const App = () => {
  const classes = useStyles();
  React.useEffect(() => {
    console.log('Current Version ', packageJson.version);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingPage />}>
        <Router history={history}>
          <Box className={classes.root} display="flex" flexDirection="column" minHeight="100vh">
            <Header/>
            <Box display="flex" flex={1} justifyContent="center">
              <Switch>
                <Route path="/">
                  <Todo />
                </Route>
              </Switch>
            </Box>
            {/* Footer Component can be added here*/}
          </Box>
        </Router>
      </React.Suspense>
    </MuiThemeProvider>
  );
};

export default App;
