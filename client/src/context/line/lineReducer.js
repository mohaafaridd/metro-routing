import { GET_LINES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LINES:
      return {
        ...state,
        lines: action.payload.lines,
      };

    default:
      return state;
  }
};
