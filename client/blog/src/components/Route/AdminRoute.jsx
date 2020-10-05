import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import { ROLE_VALUE } from '../../utils/constants';

const AdminRoute = ({
  authenticated,
  component: Component,
  ...rest
}) => (
    <Route
      {...rest}
      render={(props) => {
        const toUnauthenticatedObj = {
          pathname: '/login',
          state: { from: props.location },
        };

        const toUnauthorizedObj = {
          pathname: '/',
          state: { from: props.location },
        };
        if (authenticated) {
          // if (userRole !== ROLE_VALUE.SUPER_ADMIN
          //     && userRole !== ROLE_VALUE.ADMIN
          // ) 
          return <Redirect to={toUnauthorizedObj} />;
          // return <Component {...props} authenticated />;
        }
        if (!authenticated) return <Redirect to={toUnauthenticatedObj} />;

        return <Redirect to="/error/404" />;
      }}
    />
  );

AdminRoute.defaultProps = {
  // userRole: '',
  component: null,
  location: null,
};

AdminRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  userRole: PropTypes.string,
  component: PropTypes.any,
  location: PropTypes.any,
};

export default AdminRoute;
