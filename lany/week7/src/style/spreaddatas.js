import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Img = styled.img`
  width: 100%;
`;

export const TitleAverage = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  padding: 20px;
  color: rgb(255, 255, 255);
  background-color: rgb(56, 59, 102);
`;

export const DetailWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Detail = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
  color: rgb(255, 255, 255);
  transition: opacity 0.5s;
`;

export const Wrap = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  &:hover {
    ${Detail} {
      opacity: 1;
    }
  }
`;
