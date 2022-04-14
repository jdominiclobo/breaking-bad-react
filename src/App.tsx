import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CastInfo from "./Components/CastInfo";
import CastList from "./Components/CastList";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cast" element={<CastList />} />
        <Route path="cast/:id" element={<CastInfo />} />
      </Routes>
    </div>
  );
}

export default App;
