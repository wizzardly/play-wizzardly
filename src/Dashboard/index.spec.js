import React from 'react'
import { mount, shallow } from 'enzyme'

import Dashboard from './index.js'

describe('Dashboard', () => {
  const subject = () => <Dashboard classes={{ root: '', paper: '' }} />

  describe('when mounted', () => {
    const mounted = mount(subject())
    const html = mounted.html()

    it('contains the expected text', () => expect(html).toContain('Welcome!'))
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#dashboard')).toBe(true))
  })
})
