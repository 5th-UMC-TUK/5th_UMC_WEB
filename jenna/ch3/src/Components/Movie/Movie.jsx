import * as S from "./Movie.style";

function Movie({ poster, title, vote, overview }) {
  return (
    <>
      <S.PosterContainer>
        <S.PosterImg src={poster} alt={title}></S.PosterImg>
        <S.TitleWrap>
          <S.PosterTitle>{title}</S.PosterTitle>
          <S.Vote>{vote}</S.Vote>
        </S.TitleWrap>
        <S.OverviewContainer>
          <S.OverviewTitle>{title}</S.OverviewTitle>
          <S.Overview>{overview}</S.Overview>
        </S.OverviewContainer>
      </S.PosterContainer>
    </>
  );
}

export default Movie;
