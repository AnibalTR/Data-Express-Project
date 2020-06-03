const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const age = document.getElementById("age");
const wyrQuestion1 = document.getElementById("wyrQuestion1");
const wyrQuestion2 = document.getElementById("wyrQuestion2");
const wyrQuestion3 = document.getElementById("wyrQuestion3");
const userEyes = document.getElementById("eyes");
const userNose = document.getElementById("nose");
const userMouth = document.getElementById("mouth");
const userColor = document.getElementById("color");

//const eyes = document.getElementById("eyes");

//We need to add regex for the values of our avatars to make user puts in correct information

const userName_pattern = /[a-zA-Z]{2,}/;
const password_pattern = /((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\!\@\;\(\)\,\.\:\'\"\#\$\%\^\&\*\>\/\<\}\?\{\]\[]).{8,})/;
const email_pattern = /[a-zA-Z][@][a-zA-Z]{2,}[.][a-zA-Z]{2,}/;
const age_pattern = /[0-9]/;
const sentence_pattern = /[a-zA-Z0-9]/;
const avatar_pattern = /^(?:[1-9]|0[1-9]|10)$/;
const avatar_color = /[0-9a-fA-F]{3}/;

const errorMessage = document.getElementById("error_message");

const validate = (evt) => {
  error_msg = " ";
  if (
    avatar_color.test(userColor.value) &&
    avatar_pattern.test(userMouth.value) &&
    avatar_pattern.test(userNose.value) &&
    avatar_pattern.test(userEyes.value) &&
    sentence_pattern.test(wyrQuestion3.value) &&
    sentence_pattern.test(wyrQuestion2.value) &&
    sentence_pattern.test(wyrQuestion1.value) &&
    age_pattern.test(age.value) &&
    email_pattern.test(email.value) &&
    password_pattern.test(password.value) &&
    userName_pattern.test(username.value)
  ) {
    errors = false;
  }
  if (!avatar_color.test(userColor.value)) {
    error_msg = "Color needs to be in hex format (000-FFF).";
    errors = true;
  }
  if (!avatar_pattern.test(userMouth.value)) {
    error_msg = "Mouth needs to be range from 1 to 10.";
    errors = true;
  }
  if (!avatar_pattern.test(userNose.value)) {
    error_msg = "Nose needs to be range from 1 to 10.";
    errors = true;
  }
  if (!avatar_pattern.test(userEyes.value)) {
    error_msg = "Eyes needs to be range from 1 to 10.";
    errors = true;
  }
  if (!sentence_pattern.test(wyrQuestion3.value)) {
    error_msg = "third Question needs an answer";
    errors = true;
  }
  if (!sentence_pattern.test(wyrQuestion2.value)) {
    error_msg = "second Question needs an answer";
    errors = true;
  }
  if (!sentence_pattern.test(wyrQuestion1.value)) {
    error_msg = "first Question needs an answer";
    errors = true;
  }
  if (!age_pattern.test(age.value)) {
    error_msg = "needs an age in a number form";
    errors = true;
  }
  if (!email_pattern.test(email.value)) {
    error_msg =
      "email must have at least one character, followed by an '@', then at least two characters, followed by a dot, and then at least two more characters";
    errors = true;
  }
  if (!password_pattern.test(password.value)) {
    error_msg =
      "password must be at least 8 characters and include one capitalized letter, one digit, and one special character";
    errors = true;
  }
  if (!userName_pattern.test(username.value)) {
    error_msg = "username name needs to be a minimum of two letters.";
    errors = true;
  }
  errorMessage.innerHTML = error_msg;
};

const mySubmit = () => {
  validate();
  console.log(errors);
  if (errors) {
    console.log("error true");
    return false;
  } else {
    console.log("error false");
    return true;
  }
};

username.addEventListener("input", validate);
password.addEventListener("input", validate);
email.addEventListener("input", validate);
age.addEventListener("input", validate);
wyrQuestion1.addEventListener("input", validate);
wyrQuestion2.addEventListener("input", validate);
wyrQuestion3.addEventListener("input", validate);
userEyes.addEventListener("input", validate);
userNose.addEventListener("input", validate);
userMouth.addEventListener("input", validate);
userColor.addEventListener("input", validate);
