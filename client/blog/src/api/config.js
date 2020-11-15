import axios from 'axios';
import { call, take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import _get from 'lodash/get';

const BASE_URL = 'http://localhost:33336';
const token = localStorage.getItem('token');


export function configAxios() {
    axios.defaults.baseURL = `${BASE_URL}/api`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Content-Type'] = 'x-www-form-urlencoded';
    axios.defaults.headers['Access-Control-Request-Headers'] = 'x-access-token';
}

export function configToken() {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
}

function listenAxiosError() {
    return eventChannel((emit) => {
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                const responseCode = _get(error, 'response.status');
                emit(responseCode);
                return Promise.reject(error);
            },
        );
        return () => {
            axios.interceptors.response.use();
        };
    });
}

export function* errorHandler() {
    const axiosErrorChannel = yield call(listenAxiosError);
    while (true) {
        const responseCode = yield take(axiosErrorChannel);
        if (responseCode === 401) {
            // yield put(authActions.logout());
        }
    }
}