import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;