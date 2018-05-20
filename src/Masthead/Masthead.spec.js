import React from 'react'
import { mount, shallow } from 'enzyme'

import AppBar from '@material-ui/core/AppBar'

import Masthead from './Masthead'

describe('Masthead', () => {
  const subject = () => <Masthead classes={{ root: '', flex: '' }} />

  describe('when mounted', () => {
    const mounted = mount(subject())
    const html = mounted.html()

    it('contains the expected text', () => expect(html).toContain('wizzard.ly'))
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#masthead')).toBe(true))
    it('renders Paper', () => expect(wrapper.find(AppBar).length).toBe(1))
  })
})
