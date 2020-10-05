import React from 'react';
import PropTypes from 'prop-types';
import Home from '../Home/Home';
import LoginPage from '../Login/LoginPage';

const AuthenticatedRoute = (props) => {
  const { authenticated } = props;
  return (
    <>
      { authenticated ? <Home /> : <LoginPage />}
    </>
  )
}

AuthenticatedRoute.defaultProps = {
  userRole: '',
  component: null,
  location: null,
  path: null,
};

AuthenticatedRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  userRole: PropTypes.string,
  component: PropTypes.any,
  location: PropTypes.any,
  path: PropTypes.any,
};

export default AuthenticatedRoute;
