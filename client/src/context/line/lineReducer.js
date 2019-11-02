import { GET_LINES, SET_PATH } from '../types';

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

    default:
      return state;
  }
};
