import { State, Action } from '../../interfaces/context/language'

export default (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LANGUAGE': {
      return {
        ...state,
        language: action.payload.language,
      }
    }

    default:
      return state
  }
}
