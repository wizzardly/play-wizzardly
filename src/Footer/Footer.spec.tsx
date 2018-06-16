import { mount, shallow } from 'enzyme'
import React from 'react'

import Footer from './Footer'

describe('Footer', () => {
  const subject = () => <Footer />

  describe('when mounted', () => {
    const mounted = mount(subject())
    const html = mounted.html()

    it('contains the expected text', () => expect(html).toContain('Copyright © 2018'))
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#footer')).toBe(true))
  })
})
