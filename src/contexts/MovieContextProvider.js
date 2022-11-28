import axios from "axios";
import React, { createContext, useReducer } from "react";

export const movieContext = createContext();

const API = "http://localhost:8000/movies";

const INIT_STATE = {
  moviesArr: [],
  movieDetails: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...prevState,
        moviesArr: action.payload.data,
        // pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_MOVIES":
      return { ...prevState, moviesDetails: action.payload };

    default:
      return prevState;
  }
}

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addMovieSave(newMovies) {
    try {
      await axios.post(API, newMovies);
      readMovies();
    } catch (error) {
      return error;
    }
  }

  async function readMovies() {
    let movies = await axios(API);
    dispatch({
      type: "GET_MOVIES",
      payload: movies,
    });
  }

  let cloud = {
    addMovieSave,
    readMovies,
    moviesArr: state.moviesArr,
  };

  return (
    <movieContext.Provider value={cloud}>{children}</movieContext.Provider>
  );
};

export default MovieContextProvider;
