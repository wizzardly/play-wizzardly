export const SIGN_IN = Symbol('SIGN_IN')
export const SIGN_IN_SUCCESS = Symbol('SIGN_IN_SUCCESS')
export const SIGN_IN_FAIL = Symbol('SIGN_IN_FAIL')
export const TOKEN_RECOVERY = Symbol('TOKEN_RECOVERY')
export const SIGN_OUT = Symbol('SIGN_OUT')

export const SignIn = (email, password) => {
  const url = '/user_token'
  const data = { auth: { email, password } }
  const request = { method: 'POST', url, data }

  return { types: [SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL], payload: { request } }
}

export const SignOut = () => ({ type: SIGN_OUT })
