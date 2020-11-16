import axios from 'axios';
import { handleError } from './utils';
/**
 * create post
 * @param params: title, description, token
 */

export const createPost = (title, description, token) => axios
    .post('posts', {
        title, description
    }, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => ({ response }))
    .catch(handleError);

/**
 * get all post
 * @param params: token
 */

export const getAllPosts = (token) => axios
    .get('posts', { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => ({ response }))
    .catch(handleError);


/**
 * get one post
 * @param params: token, _id
 */

export const getPost = (token, _id) => axios
    .get(`posts/${_id}`, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => ({ response }))
    .catch(handleError);

/**
 * update post
 * @param params: token, _id
 */

export const updatePost = (selectedId, title, description, token) => {
    return axios
        .put(`posts/${selectedId}`, { title, description }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => ({ response }))
        .catch(handleError);
}

/**
 * delete post
 * @param params: token, _id
 */

export const deletePost = (_id, token) => axios
    .delete(`posts/${_id}`, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => ({ response }))
    .catch(handleError);

