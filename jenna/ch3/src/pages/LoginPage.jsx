import React, { useState } from 'react';
import * as S from '../components/Login/Login.style';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCheck, setEmailCheck] = useState(true);

  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const handleInputChange = (e) => {
    const InputValue = e.target.value;
    const InputName = e.target.name;

    if (InputName === 'email') {
      setEmail(InputValue);
      if (!emailRegex.test(InputValue)) {
        setEmailCheck(false);
      } else {
        setEmailCheck(true);
      }
    } else {
      setPassword(InputValue);
    }
  };

  return (
    <div>
      <h1>이메일과 비밀번호를 입력해주세요</h1>
      <form>
        <label htmlFor="email">
          이메일 주소
          <input
            name="email"
            type="text"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        {!emailCheck && <p>올바른 이메일을 입력해주세요.</p>}

        <br />
        <label htmlFor="password">
          비밀번호
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            placeholder="영문,숫자, 특수문자 포함 8자 이상"
          />
        </label>
        <S.SubmitBtn
          type="button"
          disabled={!(emailCheck && email !== '' && password !== '')}
        >
          확인
        </S.SubmitBtn>
      </form>
    </div>
  );
}
