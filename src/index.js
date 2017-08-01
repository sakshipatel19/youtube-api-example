'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import App from './js/components/app'
import allReducers from './js/reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

const store = applyMiddleware(ReduxPromise)(createStore)(allReducers)

ReactDOM.render((
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
)
, document.getElementById('root'));
