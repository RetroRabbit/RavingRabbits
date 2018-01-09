import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './helpers/store.js'
import App from './container/app'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/material-ui';
import '../node_modules/css/index'

import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)