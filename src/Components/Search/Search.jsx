import axios from "axios";
import { useEffect, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?t=${search}&apikey=ca560cfe`)
      .then((res) => {
        const movieDataRes = res.data;
        setMovieData(movieDataRes);
      });
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="type the keyword"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h3>{movieData.Title}</h3>
      <h5>{movieData.Year}</h5>
      <h4>{movieData.Plot}</h4>
    </div>
  );
}
