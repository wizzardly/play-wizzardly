import React from 'react'
import { shallow } from 'enzyme'

import Site from 'Site'

import Application from './Application.js'

describe('Application', () => {
  const subject = () => <Application classes={{ application: '' }} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#application')).toBe(true))
    it('renders Site', () => expect(wrapper.find(Site).length).toBe(1))
  })
})
