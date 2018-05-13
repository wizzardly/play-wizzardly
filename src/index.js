import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from 'Store'
import Application from 'Application'

const store = Store()

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,

  document.getElementById('main'),
)
