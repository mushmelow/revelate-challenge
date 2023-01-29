import React from "react";
import { useNavigate } from "react-router-dom";
import { ListContainer, MovieImg } from "./Components.style";
interface IMovie {
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
    <ListContainer>
      {listOfMovies?.map((movie: IMovie) => (
        <li key={movie.imdbID}>
          <h1>Title: {movie.Title} </h1>
          <h2>Year of release: {movie.Year} </h2>

          <MovieImg
            alt={movie.Title}
            onClick={() => navigate(`/Movie/${movie.imdbID}`)}
            src={getPosters(movie.Poster, movie.Title)}
          />
        </li>
      ))}
    </ListContainer>
  );
};
