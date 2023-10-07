import Movie from "./Components/Movie";
import { movies } from "./data/movies";

function App() {
  return (
    <div className="app-container">
      {movies.results.map((item) => {
        return (
          <Movie
            key={item.id}
            bgImage={item.backdrop_path}
            title={item.title}
            vote={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </div>
  );
}

export default App;
