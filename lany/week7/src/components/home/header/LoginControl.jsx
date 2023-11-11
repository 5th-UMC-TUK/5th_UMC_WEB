/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as L from "../../../style/home/header/logincontrol";
import { useNavigate } from "react-router-dom";

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleBtn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const moveLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      {/* <L.LoginBtn onClick={toggleBtn}>{isLoggedIn ? "로그아웃" : "로그인"}</L.LoginBtn> */}
      <L.LoginBtn onClick={moveLoginPage}>로그인</L.LoginBtn>
      <L.LoginStateText>{isLoggedIn ? "환영합니다!" : "로그인 해주세요!"}</L.LoginStateText>
    </>
  );
}
