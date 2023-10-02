import Movie from "./Components/Movie";
import { movies } from "./data/movies";

function App() {
  return (
    <div className="app-container">
      {movies.results.map((item) => {
        return <Movie movieData={item} />;
      })}
    </div>
  );
}

export default App;
