import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { Router, Route } from 'react-router'

// import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/semantic.min.css';
import store, { history } from './store';
import App from './containers/App';


const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target,
);
