import { put, call } from 'redux-saga/effects';
import * as PostApi from '../api/post';
import { notification } from 'antd';
import postActions from '../actions/postActions';

export function* getAllPost(payload) {
    const { token } = payload;
    try {
        const { response, error } = yield call(PostApi.getAllPosts, token);
        // console.log('response', response)
        if (error) {
            yield put(postActions.getAllPostError(error))
            notification.error({ message: error.message });
        }
        else {
            const { Post } = response.data;
            yield put(postActions.getAllPostSuccess(Post))
            notification.success({ message: 'Get All Post success' });
        }
    } catch (error) {
        console.log(error)
        yield put(postActions.getAllPostError(error))
    }
}

export function* createPost(payload) {
    console.log('payload', payload)
    const { title, description, token } = payload.payload;
    console.log(title, description, token)
    try {
        const { Post, error } = yield put(PostApi.createPost({ title, description }, token))
        console.log(Post)
        if (error) {
            yield put(postActions.createPostError(error))
            notification.error({ message: error.message });
        }
        else {
            const { data } = Post || {};
            yield put(postActions.createPostSuccess(data))
            notification.success({ message: 'Create new Post success' });
        }
    } catch (error) {
        yield put(postActions.createPostError(error))
    }
}