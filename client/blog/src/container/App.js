import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../components/Login/LoginPage';
import RegisterPage from '../components/Register/RegisterPage';
import DashboardPage from '../components/dashboardPage';
import { AppContainer } from '../styles'

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route path='/' exact={true} component={LoginPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <PrivateRoute path='/dashboard' component={DashboardPage} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;