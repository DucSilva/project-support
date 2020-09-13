import React from 'react';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
// Import root app
import App from './routers';
import configureStore from './store';

dotenv.config({ path: '../dotenv.js' });

// Create redux store with history
const initialState = {};
const { store, persistor } = configureStore(initialState, history);

export default () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
                <App history={history} />
            </ConnectedRouter>
        </PersistGate>
    </Provider>);
