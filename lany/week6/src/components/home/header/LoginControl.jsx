/* eslint-disable no-unused-vars */
import React from 'react';
import * as L from '../../../style/home/header/logincontrol';

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
        <L.LoginBtn
          onClick={
            this.state.isLoggedIn
              ? this.handleLogoutClick
              : this.handleLoginClick
          }
        >
          {this.state.isLoggedIn ? '로그아웃' : '로그인'}
        </L.LoginBtn>
        <L.LoginStateText>
          {this.state.isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}
        </L.LoginStateText>
      </>
    );
  }
}

export default LoginControl;
