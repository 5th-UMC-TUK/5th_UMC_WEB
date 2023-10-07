import styled from "styled-components";

export const movieInfo = styled.div`
  width: 200px;
  height: 70px;
  background-color: #373b69;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const movieContainer = styled.div`
  position: relative;
`;

export const detailContainer = styled.div`
  visibility: hidden;
  color: rgb(179, 179, 179);
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  ${movieContainer}:hover & {
    visibility: visible;
  }
`;

export const overview = styled.p`
  font-size: 13px;
  line-height: 1.5;
  height: 80%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
