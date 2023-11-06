import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  row-gap: 50px;
`;

export const MovieWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieImg = styled.img`
  width: 300px;
  height: 450px;
`;

export const MovieTitleAverage = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  padding: 20px;
  color: rgb(255, 255, 255);
  background-color: rgb(56, 59, 102);
`;

export const MovieDetailWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MovieDetail = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100%;
  color: rgb(255, 255, 255);
  padding: 0px 10px;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
`;
