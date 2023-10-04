import Movie from "./Components/Movie/Movie";
import { movies } from "./movieDummy";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      {movies.results.map((item) => {
        return (
          <Movie
            key={item.id}
            poster={item.backdrop_path}
            title={item.title}
            vote={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(8, 500px);
  grid-gap: 80px;
  margin-top: 70px;
`;
export default App;
