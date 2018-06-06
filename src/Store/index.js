import { compose, createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware'
import persistState from 'redux-localstorage'

import Reducer from 'Reducer'

export const client = axios.create({ baseURL: process.env.API_ROOT, responseType: 'json' })

const enhancer = compose(applyMiddleware(thunk, axiosMiddleware(client)), persistState('authentication'))

export default () => createStore(Reducer, enhancer)
