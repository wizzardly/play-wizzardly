import React from 'react'
import { mount, shallow } from 'enzyme'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import { Site } from './index.js'

describe('Site', () => {
  const identifier = '#site'
  const subject = () => <Site classes={{ root: '', paper: '' }} />

  describe('mounted', () => {
    let mounted

    beforeAll(() => {
      mounted = mount(subject())
    })

    it('has the correct identifier', () => {
      expect(mounted.find(identifier).length).toBe(1)
    })

    it('renders a sign in page', () => {
      expect(mounted.html()).toContain('Sign In')
    })
  })

  describe('shallow', () => {
    const wrapper = shallow(subject())

    it('has the correct identifier', () => {
      expect(wrapper.is(identifier)).toBe(true)
    })

    it('contains a Paper', () => {
      expect(wrapper.find(Paper).length).toBe(1)
    })

    it('contains a Grid', () => {
      expect(wrapper.find(Grid).length).toBeGreaterThan(0);
    })
  })
})
