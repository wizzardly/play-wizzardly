import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { TOKEN_RECOVERY } from 'Actions'

import Store from 'Store'
import Application from 'Application'

const store = Store()

console.log('index')
console.log(JSON.stringify(process.env))

const tokenFromStorage = localStorage.getItem('token')
if (tokenFromStorage) store.dispatch({ type: TOKEN_RECOVERY, token: tokenFromStorage })

const { SENTRY_DSN, GIT_HASH } = process.env
if (SENTRY_DSN) window.Raven.config(SENTRY_DSN, { release: GIT_HASH }).install()

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,

  document.getElementById('main'),
)
