import React from "react";
import { useNavigate } from "react-router-dom";
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MoviesList {
  listOfMovies: [];
}

export const MoviesList = ({ listOfMovies }: MoviesList) => {
  const navigate = useNavigate();
  const getPosters = (posterLink: string, movieTitle: string) => {
    if (posterLink === "N/A") {
      return `https://via.placeholder.com/300/c3c3c3/fff.png?text=${movieTitle}`;
    } else {
      return posterLink;
    }
  };
  return (
    <ul style={{ listStyle: "none" }}>
      {listOfMovies?.map((movie: Movie) => (
        <li key={movie.imdbID}>
          <p>Title: {movie.Title} </p>
          <img
            alt={movie.Title}
            onClick={() => navigate(`/Movie/${movie.imdbID}`)}
            src={getPosters(movie.Poster, movie.Title)}
          />
          <p> {movie.Year} </p>
        </li>
      ))}
    </ul>
  );
};
