import React, { useState, useEffect } from "react";
import { GetByTitle } from "../api";
import { SearchBar } from "../components/SearchBar";
import { MoviesList } from "../components/MoviesList";

export const Home = () => {
  const [listOfMovies, setListOfMovies] = useState<any>([]);

  const handleSearch = async (title: string) => {
    const resp = await GetByTitle(title);
    const result = await resp.json();
    setListOfMovies(result.Search);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <MoviesList listOfMovies={listOfMovies} />
    </div>
  );
};
