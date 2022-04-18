import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App/App.js';
import {Provider} from "react-redux";
import store from "./App/store/index";

import reportWebVitals from './App/reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
 
    <App />

    
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
