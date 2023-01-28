import React, { useState, useEffect } from "react";

export const SearchBar = ({ handleSearch }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnchange = (search: string) => {
    setSearchTerm(search);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleSearch(searchTerm);
    }, 2000);
    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <input
      type="text"
      placeholder="movie Title"
      onChange={(e) => handleOnchange(e.target.value)}
    />
  );
};
