// import { SIGN_IN_STARTED, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from 'Actions'
import { SIGN_IN_STARTED } from 'Actions'

export default function (email, password) {
  return dispatch => {
    dispatch({ type: SIGN_IN_STARTED })
  }
}
