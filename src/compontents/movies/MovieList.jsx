import React, { useContext, useEffect } from "react";
import { movieContext } from "../../contexts/MovieContextProvider";
import MovieCard from "../movies/MovieCard";

const MovieList = () => {
  const { moviesArr, readMovies } = useContext(movieContext);

  useEffect(() => {
    readMovies();
  }, []);

  return (
    <>
      {moviesArr
        ? moviesArr.map(movie => <MovieCard movie={movie} key={movie.id} />)
        : "...LOADING"}
    </>
  );
};

export default MovieList;
