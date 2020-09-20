import { all } from 'redux-saga/effects';
import authSaga from './user/user.saga';

export default function* rootSagas() {
    yield all([
        authSaga(),
    ]);
}
