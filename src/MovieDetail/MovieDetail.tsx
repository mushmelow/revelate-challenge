import React, { useState, useEffect } from "react";
import { GetById } from "../api/GetById";
import { useParams } from "react-router-dom";

interface Movie {
  Plot: string;
  Actors: string;
  Ratings: [];
}

interface Rating {
  Source: string;
  Value: string;
}

export const MovieDetail = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    handleSearch(id);
  }, []);

  const handleSearch = async (id: string | undefined) => {
    if (id) {
      const resp = await GetById(id);
      const result = await resp.json();
      setMovie(result);
    }
  };
  console.log(movie?.Ratings);
  return (
    <>
      <p>Plot: {movie?.Plot}</p>
      <p>Actors: {movie?.Actors} </p>
      <ul style={{ listStyle: "none" }}>
        {movie?.Ratings?.map((rating: Rating) => (
          <li key={rating.Source}>
            {rating.Source}: {rating.Value}
          </li>
        ))}
      </ul>
    </>
  );
};
