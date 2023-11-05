import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './pages/Home';
import Celebrity from './pages/Celebrity';
import TV from './pages/TV';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import MovieDetail from './Components/Movie/MovieDetail';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
