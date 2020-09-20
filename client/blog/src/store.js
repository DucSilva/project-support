import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/indexSaga';
import rootReducer from './redux/indexReducer';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux sagas is a middleware that we apply to the store
export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)

export default store;