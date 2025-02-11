import Popular from "./components/Popular";
import "./app.css";
import Header from "./components/Header";
import NewReleases from "./components/NewReleases";
import Recommended from "./components/Recommended";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Details from "./components/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import Homepage from "./pages/HomePage";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/movie/:id" element={<MoviePage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
