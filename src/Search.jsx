import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?t=${search}&apikey=ca560cfe`)
      .then((res) => {
        const movieData = res.data;
        setMovie(movieData);
      });
  }, [search]);

  const { Released, Runtime, Genre, Plot } = movie;

  const navigate = useNavigate();

  return (
    <div>
      <h1>Search Movie</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>{search}</h2>
      <h4>{Released}</h4>
      <h5>{Runtime}</h5>
      <h5>{Genre}</h5>
      <h6>{Plot}</h6>
    </div>
  );
}
