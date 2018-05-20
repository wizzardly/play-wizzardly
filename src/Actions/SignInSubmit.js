import { SIGN_IN_SUBMIT } from 'Actions'

export default function (email, password) {
  return {
    type: SIGN_IN_SUBMIT,
    auth: { email, password },
  }
}
