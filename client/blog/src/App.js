import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import LoginPage from './components/Login/LoginPage';
import RegisterPage from './container/Register';
import Home from './container/Home';
import { AppContainer } from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;