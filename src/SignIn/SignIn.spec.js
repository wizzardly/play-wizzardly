import React from 'react'
import { shallow } from 'enzyme'

import SignInForm from 'SignInForm'

import SignIn from './SignIn'

describe('SignIn', () => {
  const subject = () => <SignIn classes={{}} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#sign-in')).toBe(true))
    it('renders SignInForm', () => expect(wrapper.find(SignInForm)).toExist())
  })
})
