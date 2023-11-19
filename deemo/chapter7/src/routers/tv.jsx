import Movie from "../components/Movie/movie";
import { tvDummy } from "../data/tvDummy";

function TV() {
  return (
    <ul>
      {tvDummy.results.map((movie) => (
        <li key={movie.id}>
          <Movie
            img={movie.backdrop_path}
            titleText={movie.name}
            voteAverage={movie.vote_average}
            movieId={movie.id}
          />
        </li>
      ))}
    </ul>
  );
}

export default TV;
