import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import post from './postReducer';

const rootReducer = combineReducers({
  register, login, post
});

export default rootReducer;