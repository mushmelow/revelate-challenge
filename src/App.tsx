import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Home } from "./Home";
import { Movie } from "./Movie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
