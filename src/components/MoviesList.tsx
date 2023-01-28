import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const MoviesList = ({ listOfMovies }: any) => {
  const navigate = useNavigate();
  const getPosters = (posterLink: string, movieTitle: string) => {
    if (posterLink === "N/A") {
      return `https://via.placeholder.com/300/c3c3c3/fff.png?text=${movieTitle}`;
    } else {
      return posterLink;
    }
  };
  return (
    <>
      {listOfMovies?.map((movie: Movie) => (
        <>
          <p>{movie.Title} </p>
          <img
            onClick={() => navigate("/Movie")}
            src={getPosters(movie.Poster, movie.Title)}
          />
          <p> {movie.Year} </p>
        </>
      ))}
    </>
  );
};
