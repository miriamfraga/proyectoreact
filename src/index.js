
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* IMPORT STYLES */
import './index.scss';

/* IMPORT BROWSER ROUTER */
import { BrowserRouter } from 'react-router-dom';

/* IMPORT STORE */
import store from './store';

/* IMPORT PROVIDER REDUX */
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);