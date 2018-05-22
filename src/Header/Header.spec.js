import React from 'react'
import { mount, shallow } from 'enzyme'

import Header from './Header'

describe('Header', () => {
  const subject = dispatch => <Header dispatch={dispatch} classes={{ root: '', flex: '' }} />

  describe('when mounted', () => {
    const mounted = mount(subject(() => {}))

    it('renders the brand image', () => expect(mounted.find('#brand-image').prop('alt')).toBe('wizzard.ly'))
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject(() => {}))

    it('has the expected selector', () => expect(wrapper.is('#header')).toBe(true))
  })
})
