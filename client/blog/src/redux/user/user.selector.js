import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const emptyList = fromJS([]);
const getIsChangingPassword = ({ auth }) => auth.get('isChangingPassword', false);
const getAuthenticated = ({ user }) => user.get('authenticated', false);
const selectChangePasswordError = ({ auth }) => auth.get('changePasswordError');
const getIsRegisteringNewPassword = ({ auth }) => auth.get('isRegisteringNewPassword', false);
const selectRegisterNewPasswordError = ({ auth }) => auth.get('registerNewPasswordError');
const getIsReSendRegisteringNewPassword = ({ auth }) => auth.get('isReSendRegisteringNewPassword', false);
const selectReSendRegisterNewPasswordError = ({ auth }) => auth.get('reSendRegisterNewPasswordError');
const checkAuthenticatedStatus = ({ auth }) => !!auth.get('isLoggedIn');
const getIsLoading = ({ auth }) => auth.get('isLoading', false);
const selectErrorMessage = ({ auth }) => auth.get('errorMessage');
const getUserRole = ({ auth }) => auth.get('role');
const getToken = ({ auth }) => auth.get('token');
const getUserEmail = ({ auth }) => auth.get('email');
const getUserId = ({ auth }) => auth.get('userId');
const getUserAvatar = ({ auth }) => auth.get('avatar');
const getUserColor = ({ auth }) => auth.get('color');
const getUserFirstName = ({ auth }) => auth.get('firstName');
const getUserLastName = ({ auth }) => auth.get('lastName');
const getUserCompanyId = ({ auth }) => auth.get('company');
const getUserExtraCompany = ({ auth }) => auth.get('extraCompany', emptyList).toJS();
const selectAuthenticationReducer = (state) => state.auth;
const getAuthenticatedData = createSelector(selectAuthenticationReducer, (authState) => ({
  email: authState.get('email'),
}));
const getUserProfile = ({ auth }) => ({
  userId: auth.get('userId'),
  email: auth.get('email'),
  company: auth.get('company'),
  extraCompany: auth.get('extraCompany', emptyList).toJS(),
  color: auth.get('color'),
  firstName: auth.get('firstName'),
  lastName: auth.get('lastName'),
  role: auth.get('role'),
  notebooks: auth.get('notebooks'),
  avatar: auth.get('avatar'),
});

const userSelectors = {
  getIsChangingPassword,
  selectChangePasswordError,
  getIsRegisteringNewPassword,
  selectRegisterNewPasswordError,
  getIsReSendRegisteringNewPassword,
  selectReSendRegisterNewPasswordError,
  checkAuthenticatedStatus,
  getIsLoading,
  selectErrorMessage,
  getUserRole,
  getToken,
  getUserEmail,
  getUserId,
  getUserAvatar,
  getUserColor,
  getUserFirstName,
  getUserLastName,
  getUserCompanyId,
  getUserExtraCompany,
  getAuthenticatedData,
  getUserProfile,
  getAuthenticated,
};

export default userSelectors;
