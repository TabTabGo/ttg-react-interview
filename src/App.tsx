import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './assets/jss/theme';
import { Box, Container } from '@material-ui/core';
import LoadingPage from './views/components/LoadingPage';
import Todo from './views/Todo';

import packageJson from '../package.json';
import Footer from './views/components/Footer';
import NavBar from './views/components/NavBar';

const history = createBrowserHistory({ basename: '.' });

const App = () => {
  React.useEffect(() => {
    console.log('Current Version ', packageJson.version);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingPage />}>
        <Router history={history}>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            {/* NavBar Section */}
            <NavBar />

            {/* Main Section */}

            <Container>
              <Box display="flex" flex={1} justifyContent="center">
                <Switch>
                  <Route path="/">
                    <Todo />
                  </Route>
                </Switch>
              </Box>
            </Container>
            {/* Footer Section */}
            <Footer />
          </Box>
        </Router>
      </React.Suspense>
    </MuiThemeProvider>
  );
};

export default App;
