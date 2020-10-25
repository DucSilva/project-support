import { GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_ERROR } from './index';

// Get All Post
const getAllPost = () => {
  return {
    type: GET_ALL_POST,
  }
};

const getAllPostSuccess = (data) => {
  return {
    type: GET_ALL_POST_SUCCESS,
    data
  }
};

const getAllPostError = (error) => {
  return {
    type: GET_ALL_POST_ERROR,
    error
  }
};



const PostActions = {
  getAllPost,
  getAllPostSuccess,
  getAllPostError,
};

export default PostActions;