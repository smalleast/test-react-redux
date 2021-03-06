import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
