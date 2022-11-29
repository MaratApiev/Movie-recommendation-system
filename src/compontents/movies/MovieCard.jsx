import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div>
        <h2>{movie.name}</h2>
        <img src={movie.img} alt="" />
        <h3>{movie.desc}</h3>
        <h3>{movie.genre}</h3>
        <h3>{movie.actors}</h3>
        <h3>{movie.year}</h3>

        <button>
          <Link to={`/details/${movie.id}`}>подробнее</Link>
        </button>
      </div>
    </>
  );
};

export default MovieCard;
