import styled from "styled-components";

export const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

export const TitleWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(30px, auto));
  grid-template-rows: repeat(3, 1fr);
  width: 500px;
  height: 150px;
  background-color: rgb(73, 58, 121);
`;

export const PosterImg = styled.img`
  width: 500px;
  height: 800px;
`;

export const PosterTitle = styled.h1`
  grid-column: 1;
  grid-row: 2;
  margin: 0;
  font-size: 40px;
  color: #fff;
`;

export const Vote = styled.h3`
  grid-column: 3;
  grid-row: 2;
  margin: 0;
  font-size: 30px;
  color: #fff;
`;

export const OverviewTitle = styled.h3`
  margin: 80px 40px 50px 40px;
  font-size: 40px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
`;

export const OverviewContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const PosterContainer = styled.div`
  position: relative;
  &:hover ${OverviewContainer} {
    visibility: visible;
  }
`;

export const Overview = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0 40px 0 40px;
  font-size: 26px;
  line-height: 40px;
`;
