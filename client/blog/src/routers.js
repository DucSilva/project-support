/* eslint-disable react/jsx-filename-extension */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import userSelectors from './redux/user/user.selector'
import { AppContainer, ContentWrapper, PrintContainer } from './styles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Topics from './components/Topics/Topics';
import Login from './containers/Login';
const Router = (props) => {
  const { authenticated } = props;
  const renderAuthRoute = () => (
    <>
      { authenticated ? (<>
        <Header />
        <Switch>
          <Route exact path="/topics" component={Topics} />
          <Route exact path="/About" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="" component={() => <Redirect to="/" />} />
        </Switch>
      </>) : <Login />}

    </>
  );

  return (
    <Route path="" component={renderAuthRoute} />
  );
};

Router.propTypes = {
  authenticated: PropTypes.bool,
  // printData: PropTypes.string.isRequired,
};

Router.defaultProps = {
  authenticated: false,
  // printData: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: userSelectors.getAuthenticated(state),
})

export default connect(mapStateToProps)(Router);
