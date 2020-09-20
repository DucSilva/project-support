import { fromJS } from 'immutable';
import {
  USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
} from './user.action';

// #============#
// # INIT STATE #
// #============#
const initialState = fromJS({
  isLoading: false,
  email: null,
  username: null,
  token: null,
  userId: null,
  isLoggedIn: false,
  authenticated: false,
  errorMessage: null,
});

// #===============#
// # AUTH REDUCERS #
// #===============#
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // AUTH LOGIN
    case USER_LOGIN:
      return state.set('isLoading', true)
        .set('errorMessage', '')
        .set('isLoggedIn', false);
    case USER_LOGIN_SUCCESS: {
      const { userInfo } = action.payload;
      return state
        .set('email', userInfo.email)
        .set('token', userInfo.token)
        .set('userId', userInfo._id)
        .set('username', userInfo.username)
        .set('isLoading', false)
        .set('isLoggedIn', true);
    }
    case USER_LOGIN_FAIL:
      return state.set('isLoading', false)
        .set('errorMessage', action.errorMessage);

    default:
      return state;
  }
};

export default userReducer;
