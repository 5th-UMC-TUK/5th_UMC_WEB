import React, { useState } from 'react';
import styled from 'styled-components';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  const checkEmail = () => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    setEmailValid(emailRegEx.test(email));
  };

  const checkAll = () => {
    return !!email && !!password && emailValid;
  };

  return (
    <LoginContainer>
      <h2>이메일과 비밀번호를 입력해주세요</h2>
      <InputWrap>
        <label>
          이메일 주소
          <br />
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={checkEmail}
          />
        </label>
        {!emailValid && <WarningP>올바른 이메일을 입력해주세요.</WarningP>}
      </InputWrap>
      <InputWrap>
        <label>
          비밀번호
          <br />
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </InputWrap>
      <LoginBtn
        onClick={() => alert('로그인 성공!')}
        disabled={!checkAll()}
        checkInput={checkAll() ? 'done' : 'fail'}
      >
        확인
      </LoginBtn>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  margin-left: 50px;
`;

const InputWrap = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  margin-top: 5px;
  border-radius: 10px;
  border: 1px solid rgb(212, 211, 211);
`;

const LoginBtn = styled.button`
  width: 500px;
  height: 40px;
  border-radius: 30px;
  border: none;
  color: white;
  margin-top: 20px;
  background-color: ${(props) =>
    props.checkInput === 'done' ? '#032642' : 'rgb(210, 208, 208)'};
  cursor: ${(props) =>
    props.checkInput === 'done' ? 'pointer' : 'not-allowed'};
`;

const WarningP = styled.p`
  color: red;
  font-size: 13px;
`;
