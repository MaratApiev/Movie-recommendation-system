import React, { useContext, useState } from "react";
import { movieContext } from "../../contexts/MovieContextProvider";

const AddMovies = () => {
  const { addMovieSave } = useContext(movieContext);

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [genre, setGenre] = useState("");
  const [actors, setActors] = useState("");
  const [year, setYear] = useState("");

  function movSave(e) {
    e.preventDefault();
    if (
      !name.trim() ||
      !img.trim() ||
      !desc.trim() ||
      !genre.trim() ||
      !actors.trim() ||
      !year.trim()
    ) {
      alert("заполните все поля");
      return;
    }
    let newMovies = {
      name,
      img,
      desc,
      genre,
      actors,
      year,
    };
    addMovieSave(newMovies);
    setName("");
    setImg("");
    setDesc("");
    setGenre("");
    setActors("");
    setYear("");
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          value={name}
          placeholder="название"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          value={img}
          placeholder="фото"
          onChange={e => setImg(e.target.value)}
        />
        <input
          type="text"
          value={desc}
          placeholder="описание"
          onChange={e => setDesc(e.target.value)}
        />
        <input
          type="text"
          value={genre}
          placeholder="жанр"
          onChange={e => setGenre(e.target.value)}
        />
        <input
          type="text"
          value={actors}
          placeholder="актёры"
          onChange={e => setActors(e.target.value)}
        />
        <input
          type="text"
          value={year}
          placeholder="год"
          onChange={e => setYear(e.target.value)}
        />
        <button type="submit" onClick={movSave}>
          добавить
        </button>
      </form>
    </>
  );
};

export default AddMovies;
