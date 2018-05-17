import React from 'react'
import { shallow } from 'enzyme'

import Masthead from 'Masthead'
import Mastfoot from 'Mastfoot'
import Site from 'Site'

import Application from './index.js'

describe('Application', () => {
  const subject = () => <Application />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#application')).toBe(true))
    it('renders Masthead', () => expect(wrapper.find(Masthead).length).toBe(1))
    it('renders Mastfoot', () => expect(wrapper.find(Mastfoot).length).toBe(1))
    it('renders Site', () => expect(wrapper.find(Site).length).toBe(1))
  })
})
