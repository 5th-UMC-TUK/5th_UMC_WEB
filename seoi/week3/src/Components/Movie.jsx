function Movie({ bgImage, title, vote, overview }) {
  return (
    <div className="movie-container">
      <img className="movie_img" src={bgImage} />
      <div className="movie_info">
        <span>{title}</span>
        <span>{vote}</span>
      </div>
      <div className="detail-container">
        <h5>{title}</h5>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
