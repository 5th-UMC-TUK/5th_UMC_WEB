import React from "react";
import * as L from "../../../style/home/header/logincontrol";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../store/userInfo/userInfoSlice";

export default function LoginControl() {
  const isLoggedin = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moveLoginPage = () => {
    navigate("/login");
  };

  const logout = () => {
    dispatch(remove());
  };

  return (
    <>
      <L.LoginBtn onClick={!!isLoggedin ? logout : moveLoginPage}>{!!isLoggedin ? "로그아웃" : "로그인"}</L.LoginBtn>
      <L.LoginStateText>{isLoggedin ? "환영합니다!" : "로그인 해주세요!"}</L.LoginStateText>
    </>
  );
}
