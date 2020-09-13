/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';
// import auth from './auth/auth.reducer';
// import company from './company/company.reducer';
// import system from './system/system.reducer';
// import section from './section/section.reducer';
// import page from './page/page.reducer';
// import user from './user/user.reducer';
// import activity from './activity/activity.reducer';
// import comment from './comment/comment.reducer';
// import notification from './notification/notification.reducer';
// import search from './search/search.reducer';
// import template from './template/template.reducer';

export const REHYDRATE_COMPLETE = 'root/REHYDRATE_COMPLETE';
export const CLEAR_TRANSACTION = 'root/CLEAR_TRANSACTION';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const appReducer = combineReducers({
    // auth,
    // user,
    // company,
    // system,
    // section,
    // page,
    // comment,
    // activity,
    // notification,
    // search,
    // template,
    router: connectRouter(history),
    ...injectedReducers,
  });

  const rootReducer = (state, action) => appReducer(state, action);
  return rootReducer;
}
