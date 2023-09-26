const inputName = document.querySelector(".input_name");
const inputNickname = document.querySelector(".input_nickname");
const inputEmail = document.querySelector(".input_email");
const inputPassword = document.querySelector(".input_password");
const inputPasswordConfirm = document.querySelector(".input_password_confirm");

const nameWarning = document.querySelector(".name_validation");
const nicknameWarning = document.querySelector(".nickname_validation");
const emailWarning = document.querySelector(".email_validation");
const passwordWarning = document.querySelector(".password_validation");
const passwordConfirmWarning = document.querySelector(".password_confirm_validation");

const btnSinup = document.querySelector(".btn_signup");
const btnClose = document.querySelector(".btn_close");
const modal = document.querySelector(".modal_container");

let nameValid = false;
let nicknameValid = false;
let emailValid = false;
let passwordValid = false;
let passwordConfirmValid = false;

const checkAll = () => {
  if (nameValid && nicknameValid && emailValid && passwordValid && passwordConfirmValid) {
    btnSinup.style.backgroundColor = "rgb(53, 53, 53)";
    btnSinup.disabled = false;
  } else {
    btnSinup.style.backgroundColor = "rgb(146, 146, 146)";
    btnSinup.disabled = true;
  }
};

inputName.addEventListener("change", (e) => {
  const nameLength = e.target.value;
  if (nameLength) {
    nameWarning.innerText = "멋진 이름이네요!";
    nameWarning.style.color = "rgb(99, 222, 99)";
    nameValid = true;
  } else {
    nameWarning.innerText = "필수 입력 항목입니다!";
    nameWarning.style.color = "rgb(239, 56, 56)";
    nameValid = false;
  }
  checkAll();
});
inputNickname.addEventListener("change", (e) => {
  const nicknameLength = e.target.value.length;
  if (nicknameLength >= 2 && nicknameLength <= 5) {
    nicknameWarning.innerText = "멋진 닉네임이군요!";
    nicknameWarning.style.color = "rgb(99, 222, 99)";
    nicknameValid = true;
  } else {
    nicknameWarning.innerText = "닉네임은 2 ~ 5글자로 구성해주세요!";
    nicknameWarning.style.color = "rgb(239, 56, 56)";
    nicknameValid = false;
  }
  checkAll();
});
inputEmail.addEventListener("change", (e) => {
  const email = e.target.value;
  const checkValid = () => {
    const check = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return check.test(email);
  };
  if (checkValid()) {
    emailWarning.innerText = "올바른 메일 형식입니다!";
    emailWarning.style.color = "rgb(99, 222, 99)";
    emailValid = true;
  } else {
    emailWarning.innerText = "올바른 메일 형식이 아닙니다!";
    emailWarning.style.color = "rgb(239, 56, 56)";
    emailValid = false;
  }
  checkAll();
});
inputPassword.addEventListener("change", (e) => {
  const password = e.target.value;
  const checkValid = () => {
    const check = /^(?=.*[a-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).*$/;
    return check.test(password);
  };
  if (checkValid()) {
    passwordWarning.innerText = "안전한 비밀번호입니다!";
    passwordWarning.style.color = "rgb(99, 222, 99)";
    passwordValid = true;
  } else {
    passwordWarning.innerText = "영어+숫자+특수문자를 조합하여 작성해주세요.";
    passwordWarning.style.color = "rgb(239, 56, 56)";
    passwordValid = false;
  }
  checkAll();
});
inputPasswordConfirm.addEventListener("change", (e) => {
  const password = inputPassword.value;
  const confirm = e.target.value;
  if (password === confirm) {
    passwordConfirmWarning.innerText = "비밀번호가 일치합니다.";
    passwordConfirmWarning.style.color = "rgb(99, 222, 99)";
    passwordConfirmValid = true;
  } else {
    passwordConfirmWarning.innerText = "비밀번호가 일치하지 않습니다.";
    passwordConfirmWarning.style.color = "rgb(239, 56, 56)";
    passwordConfirmValid = false;
  }
  checkAll();
});

btnSinup.addEventListener("click", () => {
  modal.style.display = "flex";
});

btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});
