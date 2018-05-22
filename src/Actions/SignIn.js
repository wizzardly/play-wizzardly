import { SIGN_IN } from 'Actions'

export default (email, password) => {
  const url = '/user_token'
  const data = { auth: { email, password } }
  const request = { method: 'POST', url, data }

  return { type: SIGN_IN, payload: { request } }
}

