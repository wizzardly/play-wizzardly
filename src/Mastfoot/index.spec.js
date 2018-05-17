import React from 'react'
import { mount, shallow } from 'enzyme'

import Mastfoot from './index.js'

describe('Mastfoot', () => {
  const subject = () => <Mastfoot />

  describe('when mounted', () => {
    const mounted = mount(subject())
    const html = mounted.html()

    it('contains the expected text', () => expect(html).toContain('Copyright © 2018'))
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#mastfoot')).toBe(true))
  })
})
