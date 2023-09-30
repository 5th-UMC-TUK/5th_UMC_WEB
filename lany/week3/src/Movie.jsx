export default function Movie({ movieData }) {
  return (
    <div className="movie_wrap">
      <img className="movie_img" src={movieData.backdrop_path} alt="none" />
      <div className="movie_title_average">
        <span>{movieData.title}</span>
        <span>{movieData.vote_average}</span>
      </div>
    </div>
  );
}
