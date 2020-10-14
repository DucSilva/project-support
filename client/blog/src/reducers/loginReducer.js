import * as types from '../actions';
import { fromJS } from 'immutable';

const user = localStorage.getItem('existingUser');

const initialState = fromJS({
  isLogin: false,
  isLoggedIn: false,
  message: '',
  existingUser: user !== null ? JSON.parse(user) : {},
  token: localStorage.getItem('token') !== null ? localStorage.getItem('token') : '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return state.set('isLogin', true).set('isLoggedIn', false);
    case types.LOGIN_USER_SUCCESS: {
      const { existingUser, message, token } = action.data;
      return state.set('isLogin', false)
        .set('existingUser', fromJS(existingUser))
        .set('token', token)
        .set('message', message)
        .set('isLoggedIn', true);
    }
    case types.LOGIN_USER_ERROR: {
      const { message } = action;
      return state.set('isLogin', false)
        .set('message', message);
    }

    default:
      return state;
  }
};
