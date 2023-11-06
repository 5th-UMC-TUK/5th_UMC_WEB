import { movies } from "../data/movies";
import Movie from "../components/Movie/movie";
// import MovieExplanation from "../components/movieExplanation";

function Movies() {
  return (
    <ul>
      {movies.results.map((movie) => (
        <li key={movie.id}>
          <Movie
            img={movie.backdrop_path}
            titleText={movie.title}
            voteAverage={movie.vote_average}
            movieId={movie.id}
          />
          {/* <div className="movieExplanation">
            <MovieExplanation
              title={movie.title}
              explanation={movie.overview}
            />
          </div> */}
        </li>
      ))}
    </ul>
  );
}

export default Movies;
