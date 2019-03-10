import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import Main from './pages/Main';
import reducers from './reducers';
import './style/index.scss';
import {composeWithDevTools} from 'redux-devtools-extension';
const store = composeWithDevTools(applyMiddleware(apiMiddleware))(createStore)(reducers);
ReactDOM.render((
  <Provider store={store}>
    <Router basename="/">
      <Main />
    </Router>
  </Provider>
),document.getElementById('main'));
