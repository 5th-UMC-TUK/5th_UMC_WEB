function Movie({ poster, title, vote }) {
  return (
    <div>
      <img src={poster} alt={title}></img>
      <div className="title-wrap">
        <h1>{title}</h1>
        <h3>{vote}</h3>
      </div>
    </div>
  );
}

export default Movie;
