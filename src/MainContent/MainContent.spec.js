import React from 'react'
import { shallow } from 'enzyme'
import { siteInitialState } from 'data/initialState'

import UIMainContent from 'UIMainContent'

import MainContent from './MainContent'

describe('MainContent', () => {
  const subject = (dispatch = () => {}, site = { ...siteInitialState }) =>
    <MainContent dispatch={dispatch} site={site} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('renders an not shifted UIMainContent', () => expect(wrapper.find(UIMainContent).props().isShifted).toBe(false))
  })

  describe('when shallow rendered and mainMenuOpen', () => {
    const wrapper = shallow(subject(() => {}, { ...siteInitialState, mainMenuOpen: true }))

    it('renders a shifted UIMainContent', () => expect(wrapper.find(UIMainContent).props().isShifted).toBe(true))
  })
})
