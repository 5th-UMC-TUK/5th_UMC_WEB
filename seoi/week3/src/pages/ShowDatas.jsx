import React from 'react';
import { useLocation } from 'react-router-dom';

import { movies } from '../data/movies';
import { tvDummy } from '../data/tvDummy';
import ShowData from '../Components/ShowData/ShowData';
import styled from 'styled-components';

function ShowDatas() {
  const path = useLocation().pathname.replace('/', '');
  const datas = path === 'movie' ? movies : tvDummy;
  const BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

  return (
    <ShowContainer>
      {datas.results.map((item) => {
        return (
          <ShowData
            key={item.id}
            bgImage={
              path === 'movie'
                ? item.backdrop_path
                : BASE_URL + item.backdrop_path
            }
            title={path === 'movie' ? item.title : item.name}
            vote={item.vote_average}
            overview={item.overview}
            path={path}
          />
        );
      })}
    </ShowContainer>
  );
}

const ShowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  place-items: center;
`;

export default ShowDatas;
