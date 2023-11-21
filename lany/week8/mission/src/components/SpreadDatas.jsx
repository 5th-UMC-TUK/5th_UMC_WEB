import React from "react";
import * as S from "../style/spreaddatas";
import { movies } from "../data/movieDummy";
import { baseUrl } from "../data/baseUrl";
import { programs } from "../data/tvDummy";
import { useLocation } from "react-router-dom";

function SpreadDatas() {
  const { results: movieDatas } = movies;
  const { results: tvDatas } = programs;
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const datas = path === "movie" ? movieDatas : tvDatas;

  return (
    <S.Container>
      {datas.map((data, idx) => (
        <S.Wrap to={`/${path}/${path === "movie" ? data.title : data.name}`} state={{ props: data }} key={`data_wrap_${idx}`}>
          <S.DetailWrap key={`data_detail_wrap_${idx}`}>
            <S.Detail key={`data_detail_${idx}`}>
              <h2>{path === "movie" ? data.title : data.name}</h2>
              <div>{data.overview ? data.overview : "요약이 없습니다."}</div>
            </S.Detail>
            <S.Img key={`data_img_${idx}`} src={`${baseUrl}${data.backdrop_path}`} alt="none" />
            <S.TitleAverage key={`data_title_avg_${idx}`}>
              <span>{path === "movie" ? data.title : data.name}</span>
              <span>{data.vote_average}</span>
            </S.TitleAverage>
          </S.DetailWrap>
        </S.Wrap>
      ))}
    </S.Container>
  );
}

export default SpreadDatas;
