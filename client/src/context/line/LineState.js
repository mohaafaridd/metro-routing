import React, { useReducer } from 'react';
import axios from 'axios';

import lineContext from './lineContext';
import lineReducer from './lineReducer';
import { GET_LINES } from '../types';
const LineState = props => {
  const initialState = {
    lines: [],
    source: null,
    destination: null,
  };
  const [state, dispatch] = useReducer(lineReducer, initialState);

  const getLines = async () => {
    try {
      const response = await axios.get('/api/lines');
      dispatch({ type: GET_LINES, payload: response.data });
    } catch (error) {}
  };

  return (
    <lineContext.Provider
      value={{
        lines: state.lines,
        source: state.source,
        destination: state.destination,
        getLines,
      }}
    >
      {props.children}
    </lineContext.Provider>
  );
};

export default LineState;
