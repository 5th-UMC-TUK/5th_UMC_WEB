import { movies } from "./data/movies"
import Movie from "./components/Movie/movie";
import MovieExplanation from "./components/movieExplanation";
import "./App.css"

function App() {
  return (
    <div className="container">
      <ul>
        {movies.results.map(movie => (
          <li key={movie.id}>
            <Movie
              img={movie.backdrop_path}
              titleText={movie.title}
              voteAverage={movie.vote_average}
            />
            <div className="movieExplanation">
              <MovieExplanation
                title={movie.title}
                explanation={movie.overview}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
