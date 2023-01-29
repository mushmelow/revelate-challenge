import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./Home";
import { MovieDetail } from "./MovieDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
