import * as M from "./Movie.style";

export default function Movie({ movieData }) {
  return (
    <M.MovieWrap>
      <M.MovieDetailWrap>
        <M.MovieDetail>
          <h2>{movieData.title}</h2>
          <div>{movieData.overview}</div>
        </M.MovieDetail>
        <M.MovieImg src={movieData.backdrop_path} alt="none" />
        <M.MovieTitleAverage>
          <span>{movieData.title}</span>
          <span>{movieData.vote_average}</span>
        </M.MovieTitleAverage>
      </M.MovieDetailWrap>
    </M.MovieWrap>
  );
}
