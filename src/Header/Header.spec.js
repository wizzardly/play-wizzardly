import React from 'react'
import { mount, shallow } from 'enzyme'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import { SIGN_OUT } from 'Actions'

import Header from './Header'

const mockStore = configureMockStore([thunk])

describe('Header', () => {
  const subject = dispatch => <Header dispatch={dispatch} classes={{ root: '', flex: '' }} />

  describe('when mounted', () => {
    const mounted = mount(subject(() => {}))

    it('renders the brand image', () => expect(mounted.find('#brand-image').prop('alt')).toBe('wizzard.ly'))
  })

  describe('when mounted with a store and signed in', () => {
    let store
    let mounted

    beforeEach(() => {
      store = mockStore()
      mounted = mount(subject(store.dispatch))
    })

    it('calls the SignOut action', () => {
      mounted.find('button#masthead-user-menu-trigger').simulate('click')
      mounted.find('li#masthead-user-menu-sign-out').simulate('click')

      expect(store.getActions()).toEqual([{ type: SIGN_OUT }])
    })
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject(() => {}))

    it('has the expected selector', () => expect(wrapper.is('#header')).toBe(true))
  })
})
