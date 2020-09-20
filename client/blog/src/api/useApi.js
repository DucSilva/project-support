import axios from 'axios';
import { handleError } from './utils';

export const loginUser = (user) => axios
    .post('http://localhost:33336/api/users/login', user)
    .then((response) => ({ response }))
    .catch(handleError);