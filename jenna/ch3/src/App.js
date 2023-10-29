import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Movie from './pages/MoviePage';
import TV from './pages/TVPage';
import Celebirity from './pages/CelebirityPage';
import Header from './components/common/Header/Header';
import MovieDetail from './components/Movie/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/person" element={<Celebirity />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
