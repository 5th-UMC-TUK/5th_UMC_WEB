import { movies } from "./data/movies"
import MovieBox from "./components/movieBox";
import "./App.css"

function App() {
  return (
    <div className="container">
      <ul>
        {movies.results.map(movie => (
          <li key={movie.id}>
            <MovieBox
            img={movie.backdrop_path}
            title={movie.title}
            vote_average={movie.vote_average}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
