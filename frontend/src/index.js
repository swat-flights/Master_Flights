import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';
import initialState from './initialState';
import './index.sass';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
