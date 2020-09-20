/* eslint-disable react/jsx-filename-extension */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import UnauthRoute from './containers/Route/UnauthenticateRoute';
// import AuthRoute from './containers/Route/AuthenticatedRoute';
// import AdminRoute from './containers/Route/AdminRoute';
// import Login from './containers/Login';

// import Froala from './components/Froala';
// import Admin from './containers/Admin';
// import EditorPage from './containers/EditorPage';
// import systemSelectors from './redux/system/system.selector';
import { AppContainer, ContentWrapper, PrintContainer } from './styles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Topics from './components/Topics/Topics';
const Router = (props) => {

  const renderAuthRoute = () => (
    <>
      <Header />
      <Switch>
        <Route exact path="/topics" component={Topics} />
        <Route exact path="/About" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="" component={() => <Redirect to="/" />} />
      </Switch>
    </>
  );

  return (
    <Route path="" component={renderAuthRoute} />
  );
};

Router.propTypes = {
  isPageLoading: PropTypes.bool.isRequired,
  printData: PropTypes.string.isRequired,
};

// export default connect(mapStateToProps)(Router);
export default Router;
