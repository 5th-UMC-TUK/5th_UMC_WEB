import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function LoginControl() {
  const nav = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const handlClick = () => {
    setisLoggedIn(isLoggedIn);
    nav("/login")
  };

  return (
    <div>
      <LoginBtn onClick={handlClick}>
        {isLoggedIn ? "로그인" : "로그아웃"}
      </LoginBtn>
      <Text>{isLoggedIn ? "로그인 해주세요!!" : "환영합니다!!"}</Text>
    </div>
  );
}

const LoginBtn = styled.button`
  border-radius: 15px;
  background-color: white;
  width: 100px;
  height: 30px;
`;

const Text = styled.span`
  margin-left: 20px;
  color: white;
  font-size: 16px;
`;

export default LoginControl;
