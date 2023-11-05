import React from 'react';
import * as S from './Movie.style';
import { useNavigate } from 'react-router-dom';

function Movie({ bgImage, title, vote, overview }) {
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate(`/movie/${title}`, { state: { bgImage, title, vote, overview } });
  };

  return (
    <S.movieContainer onClick={handleImgClick}>
      <S.movieImg className="movie_img" src={bgImage} />
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
