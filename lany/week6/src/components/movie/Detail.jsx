import React from "react";
import * as M from "../../style/movie/movie.style";
import * as D from "../../style/movie/detail.style";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  return (
    <D.Container>
      <M.MovieImg src={location.state.props.backdrop_path} alt="none" />
      <h1>{location.state.props.title}</h1>
    </D.Container>
  );
}

export default Detail;
