// import { SIGN_IN_STARTED, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from 'Actions'
import { SIGN_IN } from 'Actions'

export default (email, password) => {
  const url = '/user_token'
  const data = { auth: { email, password } }
  const request = { method: 'POST', url, data }

  return { type: SIGN_IN, payload: { request } }
}

