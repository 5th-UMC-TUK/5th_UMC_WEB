function Movie({ poster, title, vote, overview }) {
  return (
    <>
      <div className="poster-container">
        <img src={poster} alt={title}></img>
        <div className="title-wrap">
          <h1>{title}</h1>
          <h3>{vote}</h3>
        </div>
        <div className="overview-container">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
}

export default Movie;
