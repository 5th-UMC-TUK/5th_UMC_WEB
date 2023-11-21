import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(35, 37, 72);
  padding: 10px 20%;
  display: flex;
  align-items: center;
`;

export const PageLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 0px 20px;
`;

export const LogoText = styled.div`
  position: relative;
  font-size: 20px;
  top: 1px;
  background: linear-gradient(to right, #2cc827 0%, #30ffd6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-right: 5px;
`;

export const LogoRect = styled.div`
  width: 40px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(48, 255, 214, 1) 0%,
    rgba(27, 208, 221, 1) 100%
  );
`;

export const Logo = styled(Link)`
  display: flex;
  text-decoration: none;
`;
