import { GET_LINES, SET_PATH, SET_SOURCE, SET_DESTINATION } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LINES:
      return {
        ...state,
        lines: action.payload.lines,
      };
    case SET_PATH:
      return {
        ...state,
        path: action.payload.path,
      };

    case SET_SOURCE:
      return {
        ...state,
        source: action.payload,
      };
    case SET_DESTINATION:
      return {
        ...state,
        destination: action.payload,
      };

    default:
      return state;
  }
};
