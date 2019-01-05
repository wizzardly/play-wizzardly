import React from 'react'
import { shallow } from 'enzyme'

// import Game from 'Game'

import UIMainContent from './UIMainContent'

describe('UIMainContent', () => {
  const subject = (classes = {}) => <UIMainContent classes={classes} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#main-content')).toBe(true))
    // it('renders Game', () => expect(wrapper.find(Game)).toExist())
  })
})
