import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import globalreducer from './State'
import { configureStore } from '@reduxjs/toolkit';
import {api} from './State/api.js'
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {globalreducer,
    [api.reducerPath]:api.reducer,},
  middleware:(getDefault)=>getDefault().concat(api.middleware)
});
setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
