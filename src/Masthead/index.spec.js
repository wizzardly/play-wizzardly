import React from 'react'
import { mount, shallow } from 'enzyme'

import AppBar from 'material-ui/AppBar'

import { Masthead } from './index.js'

describe('Masthead', () => {
  const identifier = '#masthead'
  const subject = () => <Masthead classes={{ root: '', flex: '' }} />

  describe('mounted', () => {
    let mounted

    beforeAll(() => {
      mounted = mount(subject())
    })

    it('has the correct identifier', () => {
      expect(mounted.find(identifier).length).toBe(1)
    })

    it('renders the site name', () => {
      expect(mounted.html()).toContain('wizzard.ly')
    })
  })

  describe('shallow', () => {
    const wrapper = shallow(subject())

    it('has the correct identifier', () => {
      expect(wrapper.is(identifier)).toBe(true)
    })

    it('contains an AppBar', () => {
      expect(wrapper.find(AppBar).length).toBe(1)
    })
  })
})
