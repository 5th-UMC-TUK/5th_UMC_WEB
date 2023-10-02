import Movie from "./Components/Movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="app-container">
      {movies.results.map((item) => {
        return (
          <Movie
            key={item.id}
            poster={item.backdrop_path}
            title={item.title}
            vote={item.vote_average}
          />
        );
      })}
    </div>
  );
}

export default App;
