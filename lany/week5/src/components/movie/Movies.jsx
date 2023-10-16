import React from 'react';
import * as M from '../../style/movie/movie.style';
import { movies } from '../../data/movieDummy';

function Movies() {
  const { results: movieDatas } = movies;
  return (
    <div className="container">
      {movieDatas.map((movieData, idx) => (
        <M.MovieWrap key={`movie_wrap_${idx}`}>
          <M.MovieDetailWrap key={`movie_detail_wrap_${idx}`}>
            <M.MovieDetail key={`movie_detail_${idx}`}>
              <h2>{movieData.title}</h2>
              <div>{movieData.overview}</div>
            </M.MovieDetail>
            <M.MovieImg
              key={`movie_img_${idx}`}
              src={movieData.backdrop_path}
              alt="none"
            />
            <M.MovieTitleAverage key={`movie_title_avg_${idx}`}>
              <span>{movieData.title}</span>
              <span>{movieData.vote_average}</span>
            </M.MovieTitleAverage>
          </M.MovieDetailWrap>
        </M.MovieWrap>
      ))}
    </div>
  );
}

export default Movies;
