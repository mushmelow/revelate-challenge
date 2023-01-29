import React, { useState, useEffect, KeyboardEvent } from "react";
import { SearchBarStyle } from "./Components.style";

export const SearchBar = ({ handleSearch }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setSearchTerm(event.target.value);
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
