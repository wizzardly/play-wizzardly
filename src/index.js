import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { TOKEN_RECOVERY } from 'Actions'

import Store from 'Store'
import Application from 'Application'

const store = Store()

const tokenFromStorage = localStorage.getItem('token')
if (tokenFromStorage) store.dispatch({ type: TOKEN_RECOVERY, token: tokenFromStorage })

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,

  document.getElementById('main'),
)
