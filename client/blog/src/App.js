import React from 'react';
import { BrowserRouter } from "react-router-dom";
import App from './routers';

export default () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

