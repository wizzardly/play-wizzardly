import React from 'react'
import { shallow } from 'enzyme'

import Header from 'Header'
import Layout from 'Layout'
import Modals from 'Modals'

import Site from './Site'

describe('Site', () => {
  const subject = (classes = {}) => <Site classes={classes} />
  const wrapper = shallow(subject())

  it('has the expected selector', () => expect(wrapper.is('#site')).toBe(true))
  it('renders Header', () => expect(wrapper.find(Header)).toExist())
  it('renders Layout', () => expect(wrapper.find(Layout)).toExist())
  it('renders Modals', () => expect(wrapper.find(Modals)).toExist())
})
