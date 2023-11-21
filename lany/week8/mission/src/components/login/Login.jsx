import { useState } from "react";
import * as I from "../../style/login/login.style";
import { useDispatch } from "react-redux";
import axios from "axios";
import { set } from "../../store/userInfo/userInfoSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInput = (e) => {
    const value = e.target.value;
    const currentInput = e.target.id;
    currentInput === "id" ? setId(value) : setPassword(value);
  };

  const onLogin = () => {
    if (!password || !id) {
      let invalidInput;
      if (!id) {
        invalidInput = "아이디";
      } else if (!password) {
        invalidInput = "비밀번호";
      }
      alert(`${invalidInput}를 입력해주세요.`);
      return;
    }
    setIsClicked(true);
    const userInfo = { id: id, pw: password };
    axios
      .post("http://localhost:8000/user/login", userInfo)
      .then((res) => {
        console.log(res);
        dispatch(set(res.data.result.AccessToken));
        setTimeout(() => {
          setIsClicked(false);
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          alert("아이디 혹은 비밀번호를 다시 확인해 주세요.");
          setIsClicked(false);
        }, 1500);
      });
  };

  return (
    <I.Container>
      <h1>아이디와 비밀번호를 입력해주세요</h1>
      <I.InputWrap>
        <label htmlFor="id">아이디</label>
        <br />
        <I.Input type="text" id="id" value={id} onChange={userInput} />
      </I.InputWrap>
      <I.InputWrap>
        <label htmlFor="password">비밀번호</label>
        <br />
        <I.Input type="password" id="password" value={password} onChange={userInput} />
      </I.InputWrap>
      <I.Button onClick={onLogin} disabled={isClicked}>
        {isClicked ? "Loading..." : "확인"}
      </I.Button>
    </I.Container>
  );
}
