import React from 'react'
import { shallow } from 'enzyme'

import Dashboard from 'Dashboard'

import Layout from './Layout'

describe('Layout', () => {
  const subject = () => <Layout />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#layout')).toBe(true))
    it('renders Dashboard', () => expect(wrapper.find(Dashboard)).toExist())
  })
})
