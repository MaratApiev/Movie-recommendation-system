import React, { useContext, useEffect } from "react";
import { movieContext } from "../../contexts/MovieContextProvider";

const MoviesPage = () => {
  const { moviesArr, readMovies } = useContext(movieContext);
  console.log(moviesArr);

  useEffect(() => {
    readMovies();
  }, []);

  return <div></div>;
};

export default MoviesPage;
