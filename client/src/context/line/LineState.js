import React, { useReducer } from 'react';
import axios from 'axios';

import lineContext from './lineContext';
import lineReducer from './lineReducer';
import {
  GET_LINES,
  SET_PATH,
  SET_SOURCE,
  SET_DESTINATION,
  SET_LOADING,
  SET_ERROR,
} from '../types';
const LineState = props => {
  const initialState = {
    lines: [],
    source: null,
    destination: null,
    path: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(lineReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const getLines = async () => {
    try {
      const response = await axios.get('/api/lines');
      dispatch({ type: GET_LINES, payload: response.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.response.data });
    }
  };

  const getPath = async (source, destination) => {
    try {
      const response = await axios.get(
        `/api/direction?source=${source}&destination=${destination}`
      );

      setTimeout(() => {
        dispatch({ type: SET_PATH, payload: response.data });
      }, 2000);
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.response.data });
    }
  };

  const setSource = source => {
    dispatch({ type: SET_SOURCE, payload: source });
  };

  const setDestination = destination => {
    dispatch({ type: SET_DESTINATION, payload: destination });
  };

  return (
    <lineContext.Provider
      value={{
        lines: state.lines,
        source: state.source,
        destination: state.destination,
        path: state.path,
        loading: state.loading,
        error: state.error,
        getLines,
        getPath,
        setSource,
        setDestination,
        setLoading,
      }}
    >
      {props.children}
    </lineContext.Provider>
  );
};

export default LineState;
