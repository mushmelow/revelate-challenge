import React, { useState, useEffect } from "react";
import { Bar, Input } from "./Components.style";

interface ISearchBar {
  handleSearch: (title: string) => void;
}

export const SearchBar = ({ handleSearch }: ISearchBar) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchTerm(event.currentTarget.value);
    }
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <Bar>
      <Input type="text" placeholder="movie Title" onKeyDown={handleKeyDown} />
    </Bar>
  );
};
