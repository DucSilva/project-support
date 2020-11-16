import {
  GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_ERROR,
  CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_ERROR,
  DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_ERROR,
  UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR,
} from '../actions/index';
import { fromJS } from 'immutable';
import _get from 'lodash/get';

const initialState = fromJS({
  isFetching: false,
  post: fromJS([]),
  isCreating: false,
  isDeleting: false,
  isUpdating: false,
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
      const oldPosts = state.get('post').toJS();
      const newPost = _get(data, 'Post', {});
      const newPostList = [...oldPosts, newPost];
      return state.set('isCreating', false)
        .set('post', fromJS(newPostList))
    }
    case CREATE_POST_ERROR: {
      const { message } = action;
      return state.set('isCreating', false)
        .set('message', message);
    }

    case DELETE_POST:
      return state.set('isDeleting', true);
    case DELETE_POST_SUCCESS: {
      const { id } = action;
      const oldPosts = state.get('post').toJS();
      const newPostList = oldPosts.filter(x => x._id !== id);
      return state.set('isDeleting', false)
        .set('post', fromJS([...newPostList]))
    }
    case DELETE_POST_ERROR: {
      const { message } = action;
      return state.set('isDeleting', false)
        .set('message', message);
    }

    case UPDATE_POST:
      return state.set('isUpdating', true);
    case UPDATE_POST_SUCCESS: {
      const { data } = action;
      const newUpdatePost = _get(data, 'updatePost', {})
      const oldPosts = state.get('post').toJS();
      const foundIndex = oldPosts.findIndex(x => x._id === newUpdatePost._id);
      oldPosts[foundIndex] = newUpdatePost;
      return state.set('isUpdating', false)
        .set('post', fromJS(oldPosts))
    }
    case UPDATE_POST_ERROR: {
      const { message } = action;
      return state.set('isUpdating', false)
        .set('message', message);
    }

    default:
      return state;
  }
};
