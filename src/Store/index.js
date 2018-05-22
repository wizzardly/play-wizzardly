import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from 'Reducer'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

export const client = axios.create({ baseURL: process.env.API_ROOT, responseType: 'json' });

export default () => createStore(Reducer, applyMiddleware(thunk, axiosMiddleware(client)))
