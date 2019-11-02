import {
  GET_LINES,
  SET_PATH,
  SET_SOURCE,
  SET_DESTINATION,
  SET_LOADING,
  SET_ERROR,
} from '../types';

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
        loading: false,
      };

    case SET_SOURCE:
      return {
        ...state,
        source: action.payload,
        loading: true,
      };
    case SET_DESTINATION:
      return {
        ...state,
        destination: action.payload,
        loading: true,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        path: [],
        error: action.payload.error,
      };

    default:
      return state;
  }
};
