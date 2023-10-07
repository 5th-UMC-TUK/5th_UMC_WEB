import * as S from "./Movie.style";

function Movie({ bgImage, title, vote, overview }) {
  return (
    <S.movieContainer>
      <img className="movie_img" src={bgImage} />
      <S.movieInfo>
        <span>{title}</span>
        <span>{vote}</span>
      </S.movieInfo>
      <S.detailContainer>
        <h5>{title}</h5>
        <S.overview>{overview}</S.overview>
      </S.detailContainer>
    </S.movieContainer>
  );
}

export default Movie;
