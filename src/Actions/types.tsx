import { AxiosRequestConfig } from 'axios'

export interface IAction {
  type: symbol;
}

export interface IAxiosAction {
  types: symbol[];
  payload: {
    request: AxiosRequestConfig,
  }
}
