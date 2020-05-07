import { State, Action } from '../../interfaces/context/path'

export default (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PATH': {
      return {
        ...state,
        path: action.payload.path,
      }
    }

    case 'SET_WEIGHT': {
      return {
        ...state,
        weight: action.payload.weight,
      }
    }

    default:
      return state
  }
}
