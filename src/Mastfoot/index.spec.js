import React from 'react'
import { mount, shallow } from 'enzyme'

import Mastfoot from './index.js'

describe('Mastfoot', () => {
  const identifier = '#mastfoot'
  const subject = () => <Mastfoot />

  describe('mounted', () => {
    let mounted

    beforeAll(() => {
      mounted = mount(subject())
    })

    it('has the correct identifier', () => {
      expect(mounted.find(identifier).length).toBe(1)
    })

    it('renders the copyright', () => {
      expect(mounted.html()).toContain('Copyright © 2018')
    })
  })

  describe('shallow', () => {
    const wrapper = shallow(subject())

    it('has the correct identifier', () => {
      expect(wrapper.is(identifier)).toBe(true)
    })
  })
})
