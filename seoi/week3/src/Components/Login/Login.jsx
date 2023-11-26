import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { set } from '../../reducers/userInfo';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isConnect, setIsConnect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    const idValue = e.target.value;
    setId(idValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  const onLogin = () => {
    if (!id || !password) {
      alert('아이디와 비밀번호를 확인해주세요.');
      return;
    }
    setIsConnect(true);
    const userInfo = { id: id, pw: password };
    axios
      .post('http://localhost:8000/user/login', userInfo)
      .then((res) => {
        console.log(res);
        dispatch(set(res.data.result.AccessToken));
        setTimeout(() => {
          setIsConnect(false);
          navigate('/');
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoginContainer>
      <h2>이메일과 비밀번호를 입력해주세요</h2>
      <InputWrap>
        <label>
          아이디
          <br />
          <Input type="text" value={id} onChange={handleIdChange} />
        </label>
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
      <LoginBtn onClick={onLogin} disabled={isConnect}>
        {isConnect ? 'Loading...' : '확인'}
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
  background-color: #032642;
  cursor: pointer;
`;
