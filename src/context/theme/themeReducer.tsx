import { State, Action } from '../../interfaces/context/theme'

export default (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_THEME': {
      return {
        ...state,
        theme: action.payload.theme,
      }
    }

    default:
      return state
  }
}
