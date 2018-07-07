import { mount, shallow } from 'enzyme'
import React from 'react'

import Dashboard from './Dashboard'

describe('Dashboard', () => {
  const subject = () => <Dashboard classes={{}} />

  describe('when mounted', () => {
    const mounted = mount(subject())
    const html = mounted.html()

    it('contains the expected text', () => expect(html).toContain('Coming Soon'))
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#dashboard')).toBe(true))
  })
})
