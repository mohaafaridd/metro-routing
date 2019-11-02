import React, { useReducer } from 'react';
import axios from 'axios';

import lineContext from './lineContext';
import lineReducer from './lineReducer';
import { GET_LINES, SET_PATH } from '../types';
const LineState = props => {
  const initialState = {
    lines: [],
    source: null,
    destination: null,
    path: [],
  };
  const [state, dispatch] = useReducer(lineReducer, initialState);

  const getLines = async () => {
    try {
      const response = await axios.get('/api/lines');
      dispatch({ type: GET_LINES, payload: response.data });
    } catch (error) {}
  };

  const getPath = async (source, destination) => {
    try {
      const response = await axios.get(
        `/api/direction?source=${source}&destination=${destination}`
      );
      dispatch({ type: SET_PATH, payload: response.data });
    } catch (error) {}
  };

  return (
    <lineContext.Provider
      value={{
        lines: state.lines,
        source: state.source,
        destination: state.destination,
        path: state.path,
        getLines,
        getPath,
      }}
    >
      {props.children}
    </lineContext.Provider>
  );
};

export default LineState;
