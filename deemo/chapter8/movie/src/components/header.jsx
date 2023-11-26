import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import logoImage from "../png/logo.png";
import LoginControl from "./Login/loginControl";

function Header() {
  const nav = useNavigate();
  return (
    <div>
      <NavBox>
        <Logo src={logoImage} alt="Logo" onClick={() => nav("/")} />
        <Navstyle onClick={() => nav("/movies")}>영화</Navstyle>
        <Navstyle onClick={() => nav("/TV")}>TV프로그램</Navstyle>
        <Navstyle onClick={() => nav("/celebirity")}>인물</Navstyle>
        <LoginControl />
      </NavBox>
    </div>
  );
}

const Logo = styled.img`
  width: auto;
  margin-left: 24px;
`;
const NavBox = styled.ul`
  height: 80px;
  background-color: #383b66;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const Navstyle = styled.li`
  font-size: 28px;
  color: white;
  cursor: pointer;
  margin: 0 10px;
`;

export default Header;
