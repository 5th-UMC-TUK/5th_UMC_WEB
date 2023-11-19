import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ShowData({ bgImage, title, vote, overview, path }) {
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate(`/${path}/${title}`, {
      state: { bgImage, title, vote, overview },
    });
  };

  return (
    <VideoContainer onClick={handleImgClick}>
      <BgImg src={bgImage} />
      <VideoInfo>
        <span>{title}</span>
        <span>{vote}</span>
      </VideoInfo>
      <DetailContainer>
        <h5>{title}</h5>
        <Overview>{overview}</Overview>
      </DetailContainer>
    </VideoContainer>
  );
}

const BgImg = styled.img`
  width: 200px;
  height: 300px;
`;

const VideoInfo = styled.div`
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

const VideoContainer = styled.div`
  position: relative;
`;

const DetailContainer = styled.div`
  visibility: hidden;
  color: rgb(179, 179, 179);
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  ${VideoContainer}:hover & {
    visibility: visible;
  }
`;

const Overview = styled.p`
  font-size: 13px;
  line-height: 1.5;
  height: 80%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ShowData;
