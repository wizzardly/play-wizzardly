export const CHECK_MATCHMAKING = Symbol('CHECK_MATCHMAKING')
export const CHECK_MATCHMAKING_SUCCESS = Symbol('CHECK_MATCHMAKING_SUCCESS')
export const CHECK_MATCHMAKING_FAIL = Symbol('CHECK_MATCHMAKING_FAIL')

export const CheckMatchmaking = () => {
  const url = '/matchmaking_status'
  const request = { method: 'GET', url }

  return { types: [CHECK_MATCHMAKING, CHECK_MATCHMAKING_SUCCESS, CHECK_MATCHMAKING_FAIL], payload: { request } }
}
