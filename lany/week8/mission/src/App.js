import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Celebrity from "./components/celebrity/Celebrity";
import NotFound from "./components/NotFound";
import Detail from "./components/Detail";
import Login from "./components/login/Login";
import SpreadDatas from "./components/SpreadDatas";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/person" element={<Celebrity />} />
      <Route path="/tv" element={<SpreadDatas />} />
      <Route path="/tv/:tv" element={<Detail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movie" element={<SpreadDatas />} />
      <Route path="/movie/:movie" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
