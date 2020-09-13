/* eslint-disable react/jsx-filename-extension */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import UnauthRoute from './containers/Route/UnauthenticateRoute';
// import AuthRoute from './containers/Route/AuthenticatedRoute';
// import AdminRoute from './containers/Route/AdminRoute';
// import Login from './containers/Login';

// import Froala from './components/Froala';
// import Admin from './containers/Admin';
// import EditorPage from './containers/EditorPage';
// import systemSelectors from './redux/system/system.selector';
import { AppContainer, ContentWrapper } from './styles';
// import Header from './containers/Header';
// import RegisterNewPassword from './pages/RegisterNewPassword/RegisterNewPassword';
// import ConfirmInvite from './containers/ConfirmInvite';

const Router = (props) => {
  const { isPageLoading, printData } = props;

  // const renderAuthRoute = () => (
  //   <AppContainer className="ignore-print">
  //     <Header />
  //     <ContentWrapper>
  //       <Switch>
  //         <AdminRoute exact path="/admin" component={Admin} />
  //         <AuthRoute exact path="/froala" component={Froala} />
  //         <AuthRoute path="/:resourceType/:resourceId/:selectedComment/:createdAt" component={EditorPage} />
  //         <AuthRoute path="/:resourceType/:resourceId" component={EditorPage} />
  //         <AuthRoute exact path="/" component={EditorPage} />
  //         <AuthRoute path="" component={() => <Redirect to="/" />} />
  //       </Switch>
  //     </ContentWrapper>
  //   </AppContainer>
  // );

  // const renderSwitch = useMemo(() => (
  //   <>
  //     {isPageLoading
  //       ? (
  //         <AppContainer>
  //           <Header isPageLoading />
  //           <ContentWrapper>
  //             <EditorPage />
  //           </ContentWrapper>
  //         </AppContainer>
  //       )
  //       : (
  //         <>
  //           <Switch>
  //             <UnauthRoute exact path="/login" component={Login} />
  //             <UnauthRoute path="/registration/:token" component={RegisterNewPassword} />
  //             {/* <UnauthRoute path="/:resourceType/:resourceId" component={EditorPage} /> */}
  //             <AuthRoute path="/invitations/confirmation/:token" component={ConfirmInvite} />
  //             <AuthRoute path="" component={renderAuthRoute} />
  //           </Switch>
  //         </>
  //       )}
  //   </>
  // ), [isPageLoading]);

  return (
    <AppContainer>
      <h1>ABC</h1>
      {/* {renderSwitch} */}
      {/* <PrintContainer>
        <FroalaEditorView model={printData} />
      </PrintContainer> */}
    </AppContainer>
  );
};

const mapStateToProps = (state) => ({
  // isPageLoading: systemSelectors.getIsLoading(state),
  // printData: systemSelectors.getPrintDataSelector(state),
});

Router.propTypes = {
  isPageLoading: PropTypes.bool.isRequired,
  printData: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Router);
