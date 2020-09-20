import {
  call, put, select,
  takeLatest, all,
} from 'redux-saga/effects';
import _get from 'lodash/get';
import { notification } from 'antd';
import * as UserApi from '../../api/useApi';
import authActions, {
  USER_LOGIN,
} from './user.action';
import authSelectors from './user.selector';
// import { configToken } from '../../api/config';
// import history from '../../utils/history';

// login handler
function* login({ payload }) {
  const { username, password } = payload;
  const { response, error } = yield call(UserApi.loginUser, username, password);

  if (error) {
    const message = _get(error, 'response.data.message', error.message); // this line of code needs to refactor
    yield put(authActions.loginFail(message));
  } else {
    const { data = {} } = response;
    const {
      username,
      token,
      _id,
    } = data;
    yield put(authActions.loginSuccess({
      username,
      token,
      _id,
    }));
  }
}


function* authFlow() {
  yield all([
    takeLatest(USER_LOGIN, login),
  ]);
}

export default authFlow;
