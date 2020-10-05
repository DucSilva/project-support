import axios from 'axios';
import { handleError } from './utils';
/**
 * login
 * @param params: username, password
 */

export const login = (username, password) => axios
    .post('users/login', {
        username,
        password,
    })
    .then((response) => ({ response }))
    .catch(handleError);

/**
 * register
 * @param params: username, password, email
 */

export const register = (username, password, email) => axios
    .post('user/signup', {
        username,
        password,
        email,
    })
    .then((response) => ({ response }))
    .catch(handleError);