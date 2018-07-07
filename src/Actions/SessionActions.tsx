import { Action, AxiosAction } from './types'

export const SIGN_IN = Symbol('SIGN_IN')
export const SIGN_IN_SUCCESS = Symbol('SIGN_IN_SUCCESS')
export const SIGN_IN_FAIL = Symbol('SIGN_IN_FAIL')
export const SIGN_OUT = Symbol('SIGN_OUT')

export const SignIn = (email: string, password: string): AxiosAction => {
  const url = '/user_token'
  const data = { auth: { email, password } }
  const request = { method: 'POST', url, data }

  return { types: [SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL], payload: { request } }
}

export const SignOut = (): Action => ({ type: SIGN_OUT })
