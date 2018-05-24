import React from 'react'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { siteInitialState } from 'data/initialState'

import { SIGN_OUT_DIALOG_HIDE, SIGN_OUT } from 'Actions'

import SignOutDialog from './SignOutDialog'

const mockStore = configureMockStore([thunk])

describe('SignOutDialog', () => {
  const subject = (dispatch, site = { ...siteInitialState }) => <SignOutDialog dispatch={dispatch} site={site} />

  const cancelButtonSelector = 'button#sign-out-dialog-cancel'
  const confirmButtonSelector = 'button#sign-out-dialog-confirm'

  describe('when mounted', () => {
    let mounted
    let html

    beforeEach(() => {
      mounted = mount(subject(() => {}))
      html = mounted.html()
    })

    it('renders expected text', () => expect(html).toContain('Are you sure you want to sign out?'))

    it('renders cancel button', () => expect(mounted.find(cancelButtonSelector)).toExist())
    it('renders confirm button', () => expect(mounted.find(confirmButtonSelector)).toExist())
  })

  describe('when mounted with a store', () => {
    let store
    let mounted

    beforeEach(() => {
      store = mockStore()
      mounted = mount(subject(store.dispatch))
    })

    describe('on cancel', () => {
      beforeEach(() => mounted.find(cancelButtonSelector).simulate('click'))
      it('triggers SIGN_OUT_DIALOG_HIDE', () => expect(store.getActions()).toEqual([{ type: SIGN_OUT_DIALOG_HIDE }]))
    })

    describe('on confirm', () => {
      beforeEach(() => mounted.find(confirmButtonSelector).simulate('click'))
      it('triggers SIGN_OUT', () => expect(store.getActions()).toEqual([{ type: SIGN_OUT }]))
    })
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject(() => {}))

    it('has the expected selector', () => expect(wrapper.is('#sign-out-dialog')).toBe(true))
  })

  describe('when shallow rendered and open', () => {
    const wrapper = shallow(subject(() => {}, { ...siteInitialState, signOutDialogOpen: true }))

    it('is open', () => expect(wrapper.prop('open')).toBe(true))
  })

  describe('when shallow rendered and NOT open', () => {
    const wrapper = shallow(subject(() => {}, { ...siteInitialState }))

    it('is open', () => expect(wrapper.prop('open')).toBe(false))
  })
})
