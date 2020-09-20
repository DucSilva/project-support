import React from 'react';
import { BrowserRouter } from "react-router-dom";
import App from './routers';
import { Provider } from 'react-redux';
import { store } from './store';

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

