import { useState } from "react";
import * as I from "../../style/login/login.style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const userInput = (e) => {
    const value = e.target.value;
    const currentInput = e.target.id;
    currentInput === "email" ? setEmail(value) : setPassword(value);
  };

  const checkEmailValid = () => {
    const check = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmailValid(check.test(email));
  };

  const checkAll = () => {
    return !!password && !!email && emailValid;
  };

  return (
    <I.Container>
      <h1>이메일과 비밀번호를 입력해주세요</h1>
      <I.InputWrap>
        <label htmlFor="email">이메일 주소</label>
        <br />
        <I.Input type="email" id="email" value={email} onChange={userInput} onBlur={checkEmailValid} />
        {!emailValid && <I.Warning>올바른 이메일을 입력해 주세요.</I.Warning>}
      </I.InputWrap>
      <I.InputWrap>
        <label htmlFor="password">비밀번호</label>
        <br />
        <I.Input type="password" id="password" value={password} onChange={userInput} />
      </I.InputWrap>
      <I.Button onClick={() => alert("확인 버튼 눌림")} disabled={!checkAll()} checkvalid={checkAll() ? "valid" : "inValid"}>
        확인
      </I.Button>
    </I.Container>
  );
}
