import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  // since isLargeRow is applied to one row, it will style it and ignore the others
  // using state for short-term memory - data gets removed when refreshed
  // sets the initial state as empty array
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  // code that run based on a specific dependency
  useEffect(() => {
    async function fetchMovies() {
      const req = await axios.get(fetchUrl);
      // console.log(req); // primary check to see data structure to know how to wield it
      setMovies(req.data.results);
      return req;
    }
    fetchMovies();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* container -> holding series posters */}
      <div className="row__posts">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // calls onClick method
            onClick={() => handleClick(movie)}
            // sets the row__postLarge to those with the isLargeRow prop
            className={`row__post ${isLargeRow && "row__postLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
