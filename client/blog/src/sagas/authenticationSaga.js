import { put, call } from 'redux-saga/effects';
import * as AuthApi from '../api/authentication';
import authenticationActions from '../actions/authenticationActions';
import { notification } from 'antd';

export function* registerSaga({ user, callback }) {
  const { username, password, email } = user;
  try {
    const { response, error } = yield call(AuthApi.register, username, password, email);
    if (error) {
      yield put(authenticationActions.registerError(error))
      notification.error({ message: error.message });
    }
    else {
      const { newUser, message, token } = response.data;
      yield put(authenticationActions.registerSuccess({ newUser, message, token }))
      notification.success({ message: 'Register User success' });
      if (callback) callback()
    }
  } catch (error) {
    yield put(authenticationActions.registerError(error))
  }
}

export function* loginSaga({ user, callback }) {
  const { username, password } = user;
  try {
    const { response, error } = yield call(AuthApi.login, username, password);
    if (error) {
      yield put(authenticationActions.loginError(error))
      notification.error({ message: error.message });
    }
    else {
      const { existingUser, message, token } = response.data;
      yield put(authenticationActions.loginSuccess({ existingUser, message, token }))
      console.log('token===>>', token)
      localStorage.setItem('token', token);
      notification.success({ message: 'Login success' });
      if (callback) callback()
    }
  } catch (error) {
    yield put(authenticationActions.loginError(error))
    localStorage.removeItem('token');
  }
}