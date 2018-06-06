import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from 'Store'
import Application from 'Application'

const sentryDSN = process.env.SENTRY_DSN
if (sentryDSN) window.Raven.config(sentryDSN, { release: process.env.GIT_HASH }).install()

const store = Store()

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,

  document.getElementById('main'),
)
