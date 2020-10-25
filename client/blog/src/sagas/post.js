import { put, call } from 'redux-saga/effects';
import * as PostApi from '../api/post';
import { notification } from 'antd';
import postActions from '../actions/postActions';

export function* getAllPost() {
    try {
        const { response, error } = yield call(PostApi.getAllPosts);
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
        yield put(postActions.getAllPostError(error))
    }
}