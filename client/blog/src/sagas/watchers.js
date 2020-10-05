import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { configAxios, errorHandler } from '../api/config'

import * as types from '../actions';


export default function* watchUserAuthentication() {
  configAxios();
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  errorHandler();
}