import React from 'react'
import { mount, shallow } from 'enzyme'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import { SIGN_OUT_DIALOG_SHOW } from 'Actions'

import Header from './Header'

const mockStore = configureMockStore([thunk])

describe('Header', () => {
  const subject = dispatch => <Header dispatch={dispatch} classes={{ root: '', flex: '' }} />

  describe('when mounted', () => {
    const mounted = mount(subject(() => {}))

    it('renders the brand image', () => expect(mounted.find('#brand-image').prop('alt')).toBe('wizzard.ly'))
  })

  describe('when mounted with a store', () => {
    let store
    let mounted

    beforeEach(() => {
      store = mockStore()
      mounted = mount(subject(store.dispatch))
    })

    it('calls the SignIn action', () => {
      mounted.find('button#header-menu').simulate('click')

      expect(store.getActions()).toEqual([{ type: SIGN_OUT_DIALOG_SHOW }])
    })
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject(() => {}))

    it('has the expected selector', () => expect(wrapper.is('#header')).toBe(true))
  })
})
