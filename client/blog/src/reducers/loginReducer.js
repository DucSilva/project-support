import * as types from '../actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isLogin: false,
  isLoggedIn: false,
  message: '',
  existingUser: {},
  token: ''
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return state.set('isLogin', true).set('isLoggedIn', false);
    case types.LOGIN_USER_SUCCESS: {
      // console.log('action===>>', action)
      const { existingUser, message, token } = action.data;
      return state.set('isLogin', false)
        .set('existingUser', existingUser)
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
