import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { movieContext } from "../../contexts/MovieContextProvider";

const EditedMovies = () => {
  const { readOneMovie, detailsOneMovie, editMovie } = useContext(movieContext);

  const navigate = useNavigate();

  const { id } = useParams();

  const [editedMovie, setEditedMovie] = useState(detailsOneMovie);

  useEffect(() => {
    readOneMovie(id);
  }, [id]);

  useEffect(() => {
    setEditedMovie(detailsOneMovie);
  }, [detailsOneMovie]);

  function handleChange(e) {
    let obj = {
      ...editedMovie,
      [e.target.name]: e.target.value,
    };
    setEditedMovie(obj);
  }

  function handleSave(e) {
    if (
      !editedMovie.name.trim() ||
      !editedMovie.img.trim() ||
      !editedMovie.desc.trim() ||
      !editedMovie.genre.trim() ||
      !editedMovie.actors.trim() ||
      !editedMovie.year.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editMovie(id, editedMovie);
    navigate("/movie");
  }

  return (
    <>
      {editedMovie ? (
        <>
          <form action="">
            <input
              type="text"
              value={editedMovie.name}
              placeholder="name"
              name="name"
              onChange={e => handleChange(e)}
            />
            <input
              type="text"
              value={editedMovie.img}
              placeholder="img"
              name="img"
              onChange={e => handleChange(e)}
            />
            <input
              type="text"
              value={editedMovie.desc}
              placeholder="desc"
              name="desc"
              onChange={e => handleChange(e)}
            />
            <input
              type="text"
              value={editedMovie.genre}
              placeholder="genre"
              name="genre"
              onChange={e => handleChange(e)}
            />
            <input
              type="text"
              value={editedMovie.actors}
              placeholder="actors"
              name="actors"
              onChange={e => handleChange(e)}
            />
            <input
              type="text"
              value={editedMovie.year}
              placeholder="year"
              name="year"
              onChange={e => handleChange(e)}
            />
            <button type="submit" onClick={e => handleSave(e)}>
              {" "}
              добавить{" "}
            </button>
          </form>
        </>
      ) : (
        "loading..."
      )}
    </>
  );
};

export default EditedMovies;
