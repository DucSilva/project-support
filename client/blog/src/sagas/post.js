import { put, call } from 'redux-saga/effects';
import * as PostApi from '../api/post';
import { notification } from 'antd';
import postActions from '../actions/postActions';

// Get all post
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

// Create post
export function* createPost({ payload, callback }) {
    const { title, description, token } = payload;
    try {
        const { response, error } = yield call(PostApi.createPost, title, description, token);
        if (error) {
            yield put(postActions.createPostError(error))
            notification.error({ message: error.message });
        }
        else {
            const { data } = response;
            yield put(postActions.createPostSuccess(data))
            notification.success({ message: 'Create new Post success' });
        }
        if (callback) callback();
    } catch (error) {
        yield put(postActions.createPostError(error))
    }
}

// Update post
export function* updatePost({ payload, callback }) {
    const { title, description, token, selectedId } = payload;
    try {
        const { response, error } = yield call(PostApi.updatePost, selectedId, title, description, token);
        if (error) {
            yield put(postActions.updatePostError(error))
            notification.error({ message: error.message });
        }
        else {
            const { data } = response;
            yield put(postActions.updatePostSuccess(data))
            notification.success({ message: 'Update Post success' });
            if (callback) callback();
        }
    } catch (error) {
        yield put(postActions.updatePostError(error))
    }
}

// Delete post
export function* deletePost(payload, callback) {
    const { token, id } = payload;
    try {
        const { response, error } = yield call(PostApi.deletePost, id, token);
        console.log('update response', response)
        if (error) {
            yield put(postActions.deletePostError(error))
            notification.error({ message: error.message });
        }
        else {
            yield put(postActions.deletePostSuccess(id))
            notification.success({ message: 'Delete Post success' });
            if (callback) callback();
        }
    } catch (error) {
        yield put(postActions.deletePostError(error))
    }
}