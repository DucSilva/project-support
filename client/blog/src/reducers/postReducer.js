import {
  GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_ERROR,
  CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_ERROR,
} from '../actions/index';
import { fromJS } from 'immutable';
import _get from 'lodash/get';

const initialState = fromJS({
  isFetching: false,
  post: fromJS([]),
  isCreating: false,
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

    case CREATE_POST:
      return state.set('isCreating', true);
    case CREATE_POST_SUCCESS: {
      const { data } = action;
      const newPost = _get(data, 'Post', {});
      return state.set('isCreating', false)
        .set('post', fromJS([...state, ...newPost]))
    }
    case CREATE_POST_ERROR: {
      const { message } = action;
      return state.set('isCreating', false)
        .set('message', message);
    }

    default:
      return state;
  }
};
