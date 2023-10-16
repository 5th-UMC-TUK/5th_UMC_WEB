import React from 'react';
import Movie from '../Components/Movie/Movie';
import { movies } from '../data/movies';
import styled from 'styled-components';

export default function Movies() {
  return (
    <MovieContainer>
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
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 30px;
  place-items: center;
`;
