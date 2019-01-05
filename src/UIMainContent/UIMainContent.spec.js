import React from 'react'
import { shallow } from 'enzyme'

import UIMainContent from './UIMainContent'

describe('UIMainContent', () => {
  const subject = (classes = {}) => <UIMainContent classes={classes} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#main-content')).toBe(true))
  })
})
