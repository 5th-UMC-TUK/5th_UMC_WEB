import React from "react";
import * as S from "../style/spreaddatas";
import * as D from "../style/detail.style";
import { useLocation, useParams } from "react-router-dom";
import { baseUrl } from "../data/baseUrl";

function Detail() {
  const location = useLocation();
  const path = useParams();
  const isMovie = Object.keys(path)[0] === "movie" ? true : false;
  return (
    <D.Container>
      <S.Img src={`${baseUrl}${location.state.props.backdrop_path}`} alt="none" />
      <h1>{isMovie ? location.state.props.title : location.state.props.name}</h1>
    </D.Container>
  );
}

export default Detail;
