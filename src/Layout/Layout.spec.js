import React from 'react'
import { shallow } from 'enzyme'

import UIMainContent from 'UIMainContent'
import MainMenu from 'MainMenu'

import Layout from './Layout'

describe('Layout', () => {
  const subject = () => <Layout classes={{}} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#layout')).toBe(true))
    it('renders MainMenu', () => expect(wrapper.find(MainMenu)).toExist())
    it('renders UIMainContent', () => expect(wrapper.find(UIMainContent)).toExist())
  })
})
