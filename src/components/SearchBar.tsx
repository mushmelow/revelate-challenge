import React, { useState, useEffect } from "react";
import { SearchBarStyle } from "./Components.style";

interface SearchBar {
  handleSearch: (title: string) => void;
}

export const SearchBar = ({ handleSearch }: SearchBar) => {
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
    <SearchBarStyle>
      <input type="text" placeholder="movie Title" onKeyDown={handleKeyDown} />
    </SearchBarStyle>
  );
};
