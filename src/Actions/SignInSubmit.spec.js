import faker from 'faker'

import { SignInSubmit, SIGN_IN_SUBMIT } from 'Actions'

describe('SignInSubmit', () => {
  it('creates the expected action', () => {
    const email = faker.internet.email()
    const password = faker.internet.password()

    expect(SignInSubmit(email, password)).toEqual({
      type: SIGN_IN_SUBMIT,
      auth: { email, password },
    })
  })
})
