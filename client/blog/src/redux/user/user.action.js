export const USER_LOGIN = 'user/LOGIN';
export const USER_LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'user/LOGIN_FAIL';
const login = (username, password) => ({
  type: USER_LOGIN,
  payload: { username, password },
});
const loginSuccess = (userInfo) => ({
  type: USER_LOGIN_SUCCESS,
  payload: {
    userInfo,
  },
});
const loginFail = (errorMessage) => ({
  type: USER_LOGIN_FAIL,
  errorMessage,
});

const userActions = {
  login,
  loginSuccess,
  loginFail,
};

export default userActions;
