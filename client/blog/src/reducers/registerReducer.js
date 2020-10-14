import { fromJS } from 'immutable';
import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from '../actions';

const initialState = fromJS({
  isRegister: false,
  isSuccess: false,
  message: '',
  user: {},
  token: '',
})

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return state.set('isRegister', true).set('isSuccess', false);

    case REGISTER_USER_SUCCESS: {
      const { newUser, message, token } = action.user;
      return state
        .set('isRegister', false)
        .set('isSuccess', true)
        .set('user', fromJS(newUser))
        .set('token', token)
        .set('message', message);
    }

    case REGISTER_USER_ERROR:
      return state.set('isRegister', false).set('isSuccess', false);
    default:
      return state;
  }
}