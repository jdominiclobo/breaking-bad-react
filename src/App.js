import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CastInfo from "./Components/CastInfo";
import CastList from "./Components/CastList";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";

function App() {
  // const routes = useRoutes([{ path: "/", element: <CastList /> }]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<CastList />} />
        <Route path="home" element={<Home />} />
        <Route path="characters/:id" element={<CastInfo />} />
      </Routes>
    </div>
  );
}

export default App;
