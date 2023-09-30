const nameInput = document.querySelector("#name");
const nicknameInput = document.querySelector("#nickname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password_confirm");

const nameValidation = document.querySelector("#name_validation");
const nicknameValication = document.querySelector("#nickname_validation");
const emailValidation = document.querySelector("#email_validation");
const passwordValidation = document.querySelector("#password_validation");
const passwordConfirmValidation = document.querySelector(
  "#password_confirm_validation"
);

const joinBtn = document.querySelector("#join_btn");
const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#modal_btn");

let nameCheck = false;
let nicknameCheck = false;
let emailCheck = false;
let passwordCheck = false;
let passwordConfirmCheck = false;

nameInput.addEventListener("keyup", () => {
  const nameValue = nameInput.value;

  if (nameValue == "") {
    nameValidation.innerText = "필수 입력 항목입니다!";
    nameValidation.classList.remove("success");
    nameValidation.classList.add("error");
    nameCheck = false;
  } else {
    nameValidation.innerText = "멋진 이름이네요!";
    nameValidation.classList.remove("error");
    nameValidation.classList.add("success");
    nameCheck = true;
  }
});

nicknameInput.addEventListener("keyup", () => {
  const nicknameLength = nicknameInput.value.length;

  if (nicknameLength >= 2 && nicknameLength <= 5) {
    nicknameValication.innerText = "멋진 닉네임이군요!";
    nicknameValication.classList.remove("error");
    nicknameValication.classList.add("success");
    nicknameCheck = true;
  } else {
    nicknameValication.innerText = "닉네임은 2~5글자로 구성해주세요!";
    nicknameValication.classList.remove("success");
    nicknameValication.classList.add("error");
    nicknameCheck = false;
  }
});

emailInput.addEventListener("keyup", () => {
  const emailValue = emailInput.value;
  const emailRegexCheck = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(emailValue);
  };

  if (emailRegexCheck(emailValue)) {
    emailValidation.innerText = "올바른 메일 형식입니다!";
    emailValidation.classList.remove("error");
    emailValidation.classList.add("success");
    emailCheck = true;
  } else {
    emailValidation.innerText = "올바른 메일 형식이 아닙니다!";
    emailValidation.classList.remove("success");
    emailValidation.classList.add("error");
    emailCheck = false;
  }
});

passwordInput.addEventListener("keyup", () => {
  const passwordValue = passwordInput.value;
  const passwordRegexCheck = () => {
    const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).*$/;
    return regex.test(passwordValue);
  };

  if (passwordRegexCheck(passwordValue)) {
    passwordValidation.innerText = "안전한 비밀번호입니다!";
    passwordValidation.classList.remove("error");
    passwordValidation.classList.add("success");
    passwordCheck = true;
  } else {
    passwordValidation.innerText =
      "영어+숫자+특수문자를 조합하여 작성해주세요.";
    passwordValidation.classList.remove("success");
    passwordValidation.classList.add("error");
    passwordCheck = false;
  }
});

passwordConfirmInput.addEventListener("keyup", () => {
  const passwordValue = passwordInput.value;
  const passwordConfirmValue = passwordConfirmInput.value;

  if (passwordValue === passwordConfirmValue) {
    passwordConfirmValidation.innerText = "비밀번호가 일치합니다.";
    passwordConfirmValidation.classList.remove("error");
    passwordConfirmValidation.classList.add("success");
    passwordConfirmCheck = true;
  } else {
    passwordConfirmValidation.innerText = "비밀번호가 일치하지 않습니다.";
    passwordConfirmValidation.classList.remove("success");
    passwordConfirmValidation.classList.add("error");
    passwordConfirmCheck = false;
  }
});

joinBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    nameCheck &&
    nicknameCheck &&
    emailCheck &&
    passwordCheck &&
    passwordConfirmCheck
  ) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
});

modalBtn.addEventListener("click", () => {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});
