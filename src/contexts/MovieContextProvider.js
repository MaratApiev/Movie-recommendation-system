import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const movieContext = createContext();

const API = "http://localhost:8000/movies";

const INIT_STATE = {
  moviesArr: [],
  detailsOneMovie: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...prevState,
        moviesArr: action.payload.data,
        // pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_MOVIE":
      return { ...prevState, detailsOneMovie: action.payload };

    default:
      return prevState;
  }
}

const MovieContextProvider = ({ children }) => {
  const navigate = useNavigate();
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

  async function readOneMovie(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_MOVIE",
      payload: data,
    });
  }

  async function deliteMovie(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readMovies();
      navigate("/movie");
    } catch (error) {
      return error;
    }
  }

  async function editMovie(id, editedMovie) {
    await axios.patch(`${API}/${id}`, editedMovie);
    readMovies();
  }

  let cloud = {
    addMovieSave,
    readMovies,
    readOneMovie,
    deliteMovie,
    editMovie,
    moviesArr: state.moviesArr,
    detailsOneMovie: state.detailsOneMovie,
  };

  return (
    <movieContext.Provider value={cloud}>{children}</movieContext.Provider>
  );
};

export default MovieContextProvider;
