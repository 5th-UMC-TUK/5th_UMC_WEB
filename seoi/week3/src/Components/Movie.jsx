function Movie({ movieData }) {
  return (
    <div className="movie-container">
      <img className="movie_img" src={movieData.backdrop_path} />
      <div className="movie_info">
        <span>{movieData.title}</span>
        <span>{movieData.vote_average}</span>
      </div>
    </div>
  );
}

export default Movie;
