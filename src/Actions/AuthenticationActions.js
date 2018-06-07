export const SIGN_IN = Symbol('SIGN_IN')
export const SIGN_IN_SUCCESS = Symbol('SIGN_IN_SUCCESS')
export const SIGN_IN_FAIL = Symbol('SIGN_IN_FAIL')
export const SIGN_OUT = Symbol('SIGN_OUT')

export const SignIn = (email, password) => {
  const url = '/user_token'
  const data = { auth: { email, password } }
  const request = { method: 'POST', url, data }

  return { types: [SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL], payload: { request } }
}

export const SignOut = () => ({ type: SIGN_OUT })

// import axios from 'axios'
//
// const setAxiosJWT = jwt => axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
//
// setAxiosJWT(jwt)
// setAxiosJWT(action.token)
// localStorage.removeItem('token')
// export const GET_CURRENT_USER = Symbol('GET_CURRENT_USER')
// export const GET_CURRENT_USER_SUCCESS = Symbol('GET_CURRENT_USER_SUCCESS')
// export const GET_CURRENT_USER_FAIL = Symbol('GET_CURRENT_USER_FAIL')
//
// export const GetCurrentUser = () => {
//   const url = '/user_info'
//   const request = { method: 'POST', url }
//
//   return { types: [GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAIL], payload: { request } }
// }
