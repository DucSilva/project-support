import {
  GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_ERROR,
  CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_ERROR, UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR, DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_ERROR
} from './index';

// Get All Post
const getAllPost = (token) => {
  return {
    type: GET_ALL_POST,
    token
  }
};

const getAllPostSuccess = (data) => {
  return {
    type: GET_ALL_POST_SUCCESS,
    data
  }
};

const getAllPostError = (error) => {
  console.log(error)
  return {
    type: GET_ALL_POST_ERROR,
    error
  }
};

// Create post 
const createPost = (payload) => {
  return {
    type: CREATE_POST,
    payload
  }
}

const createPostSuccess = (data) => {
  return {
    type: CREATE_POST_SUCCESS,
    data
  }
}

const createPostError = (error) => {
  return {
    type: CREATE_POST_ERROR,
    error
  }
}

// Update post 
const updatePost = (payload) => {
  console.log('payload==>', payload)
  return {
    type: UPDATE_POST,
    payload
  }
}

const updatePostSuccess = (data) => {
  return {
    type: UPDATE_POST_SUCCESS,
    data
  }
}

const updatePostError = (error) => {
  return {
    type: UPDATE_POST_ERROR,
    error
  }
}

// Delete post 
const deletePost = (id, token) => {
  return {
    type: DELETE_POST,
    id,
    token
  }
}

const deletePostSuccess = (id) => {
  return {
    type: DELETE_POST_SUCCESS,
    id
  }
}

const deletePostError = (error) => {
  return {
    type: DELETE_POST_ERROR,
    error
  }
}


const PostActions = {
  getAllPost,
  getAllPostSuccess,
  getAllPostError,
  createPost,
  createPostSuccess,
  createPostError,
  updatePost,
  updatePostSuccess,
  updatePostError,
  deletePost,
  deletePostSuccess,
  deletePostError,
};

export default PostActions;