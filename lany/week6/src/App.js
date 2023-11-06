import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./components/movie/Movies";
import Home from "./components/home/Home";
import Celebrity from "./components/celebrity/Celebrity";
import TV from "./components/tv/TV";
import NotFound from "./components/NotFound";
import Detail from "./components/movie/Detail";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/person" element={<Celebrity />} />
      <Route path="/tv" element={<TV />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/movie/:movie" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
