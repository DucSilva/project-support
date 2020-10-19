import axios from 'axios';
import { handleError } from './utils';
/**
 * create post
 * @param params: title, description, token
 */

export const createPost = (title, description, token) => axios
    .post('posts', { headers: { 'x-access-token': token } }, {
        title, description
    })
    .then((response) => ({ response }))
    .catch(handleError);

/**
 * register
 * @param params: token
 */

export const getAllPosts = (token) => axios
    .get('posts', { headers: { 'x-access-token': token } })
    .then((response) => ({ response }))
    .catch(handleError);