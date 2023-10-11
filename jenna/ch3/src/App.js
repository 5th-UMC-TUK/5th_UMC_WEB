import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './pages/MoviePage';
import TV from './pages/TVPage';
import Celebirity from './pages/CelebirityPage';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/tv" element={<TV />} />
        <Route path="/person" element={<Celebirity />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
