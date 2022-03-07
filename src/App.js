import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CastInfo from "./components/CastInfo";
import CastList from "./components/CastList";

function App() {
  // const routes = useRoutes([{ path: "/", element: <CastList /> }]);

  return (
    <div className="App">
      <header>
        <h1>Breaking Bad</h1>
      </header>
      <Routes>
        <Route path="/" element={<CastList />} />
        <Route path="characters/:id" element={<CastInfo />} />
      </Routes>
    </div>
  );
}

export default App;
