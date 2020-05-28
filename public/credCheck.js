const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const age = document.getElementById("age");
const firstQuestion = document.getElementById("firstQuestion");
const secondQuestion = document.getElementById("secondQuestion");
const thirdQuestion = document.getElementById("thirdQuestion");

//We need to add regex for the values of our avatars to make user user puts in correct information

const userName_pattern = /[a-zA-Z]{2,}/;
const password_pattern = /((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\!\@\;\(\)\,\.\:\'\"\#\$\%\^\&\*\>\/\<\}\?\{\]\[]).{8,})/;
const email_pattern = /[a-zA-Z][@][a-zA-Z]{2,}[.][a-zA-Z]{2,}/;
const age_pattern = /[0-9]/;
const sentence_pattern = /[a-zA-Z0-9]/;

const errorMessage = document.getElementById("error_message");

const validate = (evt) => {
  error_msg = " ";
  if (
    sentence_pattern.test(thirdQuestion.value) &&
    sentence_pattern.test(secondQuestion.value) &&
    sentence_pattern.test(firstQuestion.value) &&
    age_pattern.test(age.value) &&
    email_pattern.test(email.value) &&
    password_pattern.test(password.value) &&
    userName_pattern.test(username.value)
  ) {
    errors = false;
  }
  if (!sentence_pattern.test(thirdQuestion.value)) {
    error_msg = "third Question needs an answer";
    errors = true;
  }
  if (!sentence_pattern.test(secondQuestion.value)) {
    error_msg = "second Question needs an answer";
    errors = true;
  }
  if (!sentence_pattern.test(firstQuestion.value)) {
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
firstQuestion.addEventListener("input", validate);
secondQuestion.addEventListener("input", validate);
thirdQuestion.addEventListener("input", validate);
