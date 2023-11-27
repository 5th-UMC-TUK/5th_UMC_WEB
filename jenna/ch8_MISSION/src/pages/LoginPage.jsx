import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reducer/userSlice';
import * as S from '../components/Login/Login.style';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const Login = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        // eslint-disable-next-line object-shorthand
        id: id,
        pw: password,
      });
      console.log(response);
      dispatch(loginUser({ id, password }));
    } catch (e) {
      console.error(e);
      alert('아이디와 비밀번호를 확인해주세요');
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      alert('ID를 입력하세요.');
    } else if (!password) {
      alert('Password를 입력하세요.');
    } else {
      Login();
    }
  };
  const handleInputChange = (e) => {
    const InputValue = e.target.value;
    const InputName = e.target.name;

    if (InputName === 'id') {
      setId(InputValue);
    } else {
      setPassword(InputValue);
    }
  };

  return (
    <S.Wrap>
      <S.Title>아이디와 비밀번호를 입력해주세요</S.Title>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.InputLabel htmlFor="id">
          아이디
          <S.LoginInput
            name="id"
            type="text"
            value={id}
            onChange={handleInputChange}
          />
        </S.InputLabel>

        <br />
        <S.InputLabel htmlFor="password">
          비밀번호
          <S.LoginInput
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
          />
        </S.InputLabel>
        <S.SubmitBtn type="submit" disabled={isLoading}>
          로그인
        </S.SubmitBtn>
        {isLoading && <p>Loading ... </p>}
      </S.LoginForm>
    </S.Wrap>
  );
}
