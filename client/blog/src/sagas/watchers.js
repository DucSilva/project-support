import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { getAllPost } from './post';
import { configAxios, errorHandler } from '../api/config'
import { REGISTER_USER, LOGIN_USER, GET_ALL_POST } from '../actions/index';


export default function* watchUserAuthentication() {
  configAxios();
  yield takeLatest(REGISTER_USER, registerSaga);
  yield takeLatest(LOGIN_USER, loginSaga);
  yield takeLatest(GET_ALL_POST, getAllPost);
  errorHandler();
}