import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '@/store';
import routes from '@/constants/routes';

import MainPage from '@/pages/MainPage';
import Layout from '../Layout';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path={routes.MAIN_PAGE} component={MainPage} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
