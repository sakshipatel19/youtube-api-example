import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './js/components/app'
import allReducers from './js/reducers'
const store = createStore(allReducers);

ReactDOM.render((
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
)
, document.getElementById('root'));
