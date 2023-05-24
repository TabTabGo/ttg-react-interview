import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, makeStyles, createStyles } from '@material-ui/core/styles';
import theme from './assets/jss/theme';
import LoadingPage from './views/components/LoadingPage/LoadingPage';
import Todo from './views/Todo';

import packageJson from '../package.json';
import Layout from './Layout/Layout';

const history = createBrowserHistory({ basename: '.' });

const App = () => {
  React.useEffect(() => {
    console.log('Current Version ', packageJson.version);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingPage />}>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route path="/">
                <Todo />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </React.Suspense>
    </MuiThemeProvider>
  );
};

export default App;
