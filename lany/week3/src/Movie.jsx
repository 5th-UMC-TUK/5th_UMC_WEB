export default function Movie({ movieData }) {
  return (
    <div className="movie_wrap">
      <div className="movie_detail_wrap">
        <div className="movie_detail">
          <h2>{movieData.title}</h2>
          <div>{movieData.overview}</div>
        </div>
        <img className="movie_img" src={movieData.backdrop_path} alt="none" />
        <div className="movie_title_average">
          <span>{movieData.title}</span>
          <span>{movieData.vote_average}</span>
        </div>
      </div>
    </div>
  );
}
