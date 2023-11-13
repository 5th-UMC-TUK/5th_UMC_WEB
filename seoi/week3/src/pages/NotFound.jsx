import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <h2>해당 페이지를 찾지 못했습니다.</h2>
      <span>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</span>
      <MainBtn onClick={() => navigate('/')}>메인 페이지로 이동</MainBtn>
    </>
  );
}

export default NotFound;

const MainBtn = styled.p`
  color: red;
  cursor: pointer;
`;
