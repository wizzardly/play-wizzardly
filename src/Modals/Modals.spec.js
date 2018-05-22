import React from 'react'
import { shallow } from 'enzyme'

import SignOutDialog from 'SignOutDialog'

import Modals from './Modals'

describe('Modals', () => {
  const subject = () => <Modals />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#modals')).toBe(true))
    it('renders SignOutDialog', () => expect(wrapper.find(SignOutDialog)).toHaveLength(1))
  })
})
