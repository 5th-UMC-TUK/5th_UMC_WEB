import React from 'react';
import styled from 'styled-components';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState(() => ({
      isLoggedIn: true,
    }));
  }

  handleLogoutClick() {
    this.setState(() => ({
      isLoggedIn: false,
    }));
  }

  render() {
    return (
      <>
        <LoginBtn
          onClick={
            this.state.isLoggedIn
              ? this.handleLogoutClick
              : this.handleLoginClick
          }
        >
          {this.state.isLoggedIn ? '로그아웃' : '로그인'}
        </LoginBtn>
        <LoginText>
          {this.state.isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}
        </LoginText>
      </>
    );
  }
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
