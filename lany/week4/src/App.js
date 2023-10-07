import "./App.css";
import Movie from "./components/movie/Movie";
import { movies } from "./data/data";

function App() {
  const { results: movieDatas } = movies;

  return (
    <div className="container">
      {movieDatas.map((movieData, idx) => (
        <Movie movieData={movieData} key={`${movieData.title} ${idx}`} />
      ))}
    </div>
  );
}

export default App;
