import React from 'react'
import { mount, shallow } from 'enzyme'

import Application from './index.js'

describe('Application', () => {
  const identifier = '#application'
  const subject = () => <Application />

  describe('mounted', () => {
    const mounted = mount(subject())

    it('has the correct identifier', () => {
      expect(mounted.find(identifier).length).toBe(1)
    })

    it('renders Masthead', () => {
      expect(mounted.find('#masthead').length).toBe(1)
    })

    it('renders Mastfoot', () => {
      expect(mounted.find('#mastfoot').length).toBe(1)
    })

    it('renders Site', () => {
      expect(mounted.find('#site').length).toBe(1)
    })
  })

  describe('shallow', () => {
    const wrapper = shallow(subject())

    it('has the correct identifier', () => {
      expect(wrapper.is(identifier)).toBe(true)
    })
  })
})
