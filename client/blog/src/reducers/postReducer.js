import { GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_ERROR } from '../actions/index';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  post: fromJS([]),
});

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POST:
      return state.set('isFetching', true);
    case GET_ALL_POST_SUCCESS: {
      const { data } = action;
      return state.set('isFetching', false)
        .set('post', fromJS(data))
    }
    case GET_ALL_POST_ERROR: {
      const { message } = action;
      return state.set('isFetching', false)
        .set('message', message);
    }

    default:
      return state;
  }
};
