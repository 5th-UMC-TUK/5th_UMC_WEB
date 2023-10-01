const userid = document.getElementById("userid");
const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const repwd = document.getElementById("repwd");
const btn = document.getElementById("btn");
const modal = document.querySelector(".modal_wrapper");

const idError = document.querySelector(".idError");
const nicknameError = document.querySelector(".nicknameError");
const emailError = document.querySelector(".emailError");
const pwdError = document.querySelector(".pwdError");
const repwdError = document.querySelector(".repwdError");

userid.addEventListener("input", idCheck);
nickname.addEventListener("input", nicknameCheck);
email.addEventListener("input", emailCheck);
pwd.addEventListener("input", pwdCheck);
repwd.addEventListener("input", repwdCheck);

let checkAll = [false, false, false, false, false];

function idCheck() {
  if (!userid.value) {
    idError.textContent = "필수 입력 항목입니다";
    idError.style.color = "#FF5A5A";
    checkAll[0] = false;
  } else {
    idError.textContent = "멋진 이름이네요!";
    idError.style.color = "#36CF45";
    checkAll[0] = true;
  }

  btnActive();
}

function nicknameCheck() {
  const length = nickname.value.length;

  if (length < 2 || length > 5) {
    nicknameError.textContent = "닉네임은 2~5글자로 구성해주세요!";
    nicknameError.style.color = "#FF5A5A";
    checkAll[1] = false;
  } else {
    nicknameError.textContent = "멋진 닉네임이군요!";
    nicknameError.style.color = "#36CF45";
    checkAll[1] = true;
  }

  btnActive();
}

function emailCheck() {
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.(com)$/;

  if (!emailRegex.test(email.value)) {
    emailError.textContent = "올바른 메일 형식이 아닙니다";
    emailError.style.color = "#FF5A5A";
    checkAll[2] = false;
  } else {
    emailError.textContent = "올바른 메일 형식입니다";
    emailError.style.color = "#36CF45";
    checkAll[2] = true;
  }

  btnActive();
}

function pwdCheck() {
  const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;
  // .∗ 부분은 전체 문자열과의 일치를 보장하는 역할??
  if (!pwdRegex.test(pwd.value)) {
    pwdError.textContent = "영어+숫자+특수문자로 조합하여 작성해주세요";
    pwdError.style.color = "#FF5A5A";
    checkAll[3] = false;
  } else {
    pwdError.textContent = "안전한 비밀번호입니다";
    pwdError.style.color = "#36CF45";
    checkAll[3] = true;
  }

  btnActive();
}

function repwdCheck() {
  if (pwd.value != repwd.value) {
    repwdError.textContent = "비밀번호가 일치하지않습니다";
    repwdError.style.color = "#FF5A5A";
    checkAll[4] = false;
  } else {
    repwdError.textContent = "비밀번호가 일치합니다";
    repwdError.style.color = "#36CF45";
    checkAll[4] = true;
  }

  btnActive();
}

function btnActive() {
  if (checkAll.every((i) => i === true)) {
    btn.disabled = false;
    btn.style.backgroundColor = "#4a4a4a";
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = "#b2b2b2";
  }
}

btn.onclick = (e) => {
  e.preventDefault();
  modal.style.display = "flex";
};
