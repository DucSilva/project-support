import {
  GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_ERROR,
  CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_ERROR
} from './index';

// Get All Post
const getAllPost = (token) => {
  console.log('token===>>>', token)
  return {
    type: GET_ALL_POST,
    token
  }
};

const getAllPostSuccess = (data) => {
  console.log('data===>>', data)
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
  console.log('payload===>>', payload)
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
    type: CREATE_POST,
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
};

export default PostActions;