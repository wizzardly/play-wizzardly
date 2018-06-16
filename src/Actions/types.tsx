import { AxiosRequestConfig } from 'axios'

export interface Action {
  type: symbol;
}

export interface AxiosAction {
  types: symbol[];
  payload: {
    request: AxiosRequestConfig,
  }
}
