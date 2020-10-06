import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { persistStore } from 'redux-persist' // imports from redux-persist
import { PersistGate } from 'redux-persist/integration/react'


const store = configureStore();
const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root'));

