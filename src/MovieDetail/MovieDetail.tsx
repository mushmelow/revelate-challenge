import React, { useState, useEffect } from "react";
import { GetById } from "../api/GetById";
import { useParams } from "react-router-dom";
import { Box, ListContainer } from "../components/Components.style";

interface IMovie {
  Plot: string;
  Actors: string;
  Ratings: [];
}

interface IRating {
  Source: string;
  Value: string;
}

export const MovieDetail = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

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

  return (
    <>
      <Box>
        <h1>Plot</h1>
        <p>{movie?.Plot} </p>
      </Box>
      <Box>
        <h1>Actors </h1>
        <p>{movie?.Actors} </p>
      </Box>
      <Box>
        <h1>Ratings</h1>
        <ListContainer>
          {movie?.Ratings?.map((rating: IRating) => (
            <li key={rating.Source}>
              {rating.Source}: {rating.Value}
            </li>
          ))}
        </ListContainer>
      </Box>
    </>
  );
};
