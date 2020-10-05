import { fromJS } from 'immutable';
import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from '../actions';

const initialState = fromJS({
  isRegister: false,

})

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return state.set('isRegister', true);
    case REGISTER_USER_SUCCESS:
    case REGISTER_USER_ERROR:
      return state.set('isRegister', false)
    default:
      return state;
  }
}