import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from './redux/reducers/index'
// logger
const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  // <React>
    <Provider  store ={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  // </React>,
  document.getElementById('root')
);