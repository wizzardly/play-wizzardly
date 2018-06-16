import { Action } from './types'

export const SIGN_OUT_DIALOG_SHOW = Symbol('SIGN_OUT_DIALOG_SHOW')
export const SIGN_OUT_DIALOG_HIDE = Symbol('SIGN_OUT_DIALOG_HIDE')
export const MAIN_MENU_SHOW = Symbol('MAIN_MENU_SHOW')
export const MAIN_MENU_HIDE = Symbol('MAIN_MENU_HIDE')

export const ShowSignOutDialog = (): Action => ({ type: SIGN_OUT_DIALOG_SHOW })
export const HideSignOutDialog = (): Action => ({ type: SIGN_OUT_DIALOG_HIDE })

export const ShowMainMenu = (): Action => ({ type: MAIN_MENU_SHOW })
export const HideMainMenu = (): Action => ({ type: MAIN_MENU_HIDE })
