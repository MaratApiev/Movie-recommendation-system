import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { movieContext } from "../../contexts/MovieContextProvider";

const MovieDetails = () => {
  const { readOneMovie, detailsOneMovie, deliteMovie } =
    useContext(movieContext);
  console.log(detailsOneMovie);

  const { id } = useParams();

  useEffect(() => {
    readOneMovie(id);
  }, [id]);

  return (
    <>
      {detailsOneMovie ? (
        <div>
          <h2>{detailsOneMovie.name}</h2>
          <img src={detailsOneMovie.img} alt="" />
          <h3>{detailsOneMovie.desc}</h3>
          <h3>{detailsOneMovie.genre}</h3>
          <h3>{detailsOneMovie.actors}</h3>
          <h3>{detailsOneMovie.year}</h3>
          <button onClick={() => deliteMovie(detailsOneMovie.id)}>
            удалить
          </button>
          <button>
            <Link to={`/edit/${detailsOneMovie.id}`}>Редактировать</Link>
          </button>
        </div>
      ) : (
        "...LOADING"
      )}
    </>
  );
};

export default MovieDetails;
