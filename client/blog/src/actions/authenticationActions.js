import * as types from './index';

// Register
const register = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  }
};

const registerSuccess = (user) => {
  return {
    type: types.REGISTER_USER_SUCCESS,
    user
  }
};

const registerError = (error) => {
  return {
    type: types.REGISTER_USER_ERROR,
    error
  }
};

//Login
const login = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};

const loginSuccess = (data) => {
  console.log('dataNewUser', data)
  return {
    type: types.LOGIN_USER_SUCCESS,
    data
  }
};

const loginError = (error) => {
  return {
    type: types.LOGIN_USER_ERROR,
    error
  }
};

const authenticationActions = {
  login,
  loginSuccess,
  loginError,
  register,
  registerSuccess,
  registerError,
};

export default authenticationActions;