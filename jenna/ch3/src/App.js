import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Movie from './pages/MoviePage';
import TV from './pages/TVPage';
import Celebirity from './pages/CelebirityPage';
import Header from './components/common/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/person" element={<Celebirity />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
