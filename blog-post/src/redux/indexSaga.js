import { all, put, take } from 'redux-saga/effects';
import { configAxios, errorHandler } from '../api/config';
import { CLEAR_TRANSACTION, REHYDRATE_COMPLETE } from './indexReducer';
// import authSaga from './auth/auth.saga';
// import companySaga from './company/company.saga';
// import userSaga from './user/user.saga';
// import sectionSaga from './section/section.saga';
// import pageSaga from './page/page.saga';
// import activitySaga from './activity/activity.saga';
// import commentSaga from './comment/comment.saga';
// import notificationSaga from './notification/notification.saga';
// import searchSaga from './search/search.saga';
// import templateSaga from './template/template.saga';

export default function* rootSagas() {
  configAxios();
  yield all([
    put({
      type: CLEAR_TRANSACTION,
    }),
    take(REHYDRATE_COMPLETE),
  ]);

  yield all([
    // authSaga(),
    // userSaga(),
    // companySaga(),
    // sectionSaga(),
    // pageSaga(),
    // commentSaga(),
    // activitySaga(),
    // notificationSaga(),
    // searchSaga(),
    // templateSaga(),
    errorHandler(),
  ]);
}
