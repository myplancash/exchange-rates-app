const initialState = {
  name: 'Sergio Esteban Torres',
  loggedId: false
}

export function userReducer (state = initialState, action) {
  return state
}

export const getName = (state) => state.user.name;
export const getLoggedId = (state) => state.user.loggedId;