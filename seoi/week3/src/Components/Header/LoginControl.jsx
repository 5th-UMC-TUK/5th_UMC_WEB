import React, { useState } from 'react';
import styled from 'styled-components';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginBtnClcik = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <LoginBtn onClick={handleLoginBtnClcik}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </LoginBtn>
      <LoginText>{isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</LoginText>
    </>
  );
}

export default LoginControl;

const LoginBtn = styled.button`
  border-radius: 50px;
  border: 1px solid black;
  margin-left: 20px;
  width: 70px;
  height: 25px;
`;

const LoginText = styled.p`
  color: white;
  margin-left: 10px;
`;
