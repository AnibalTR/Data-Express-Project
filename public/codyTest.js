const wyrQuestion1 = document.getElementById("wyrQuestion1");
const wyrQuestion2 = document.getElementById("wyrQuestion2");
const wyrQuestion3 = document.getElementById("wyrQuestion3");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const option5 = document.getElementById("option5");
const option6 = document.getElementById("option6");

const handleClick = (evt) => {
  if (evt.target.innerHTML === option1.innerHTML) {
    option1.removeEventListener("click", handleClick);
    option2.removeEventListener("click", handleClick);
  } else if (evt.target.innerHTML === option2.innerHTML) {
    option1.removeEventListener("click", handleClick);
    option2.removeEventListener("click", handleClick);
  } else {
    console.log(err);
  }
};

option1.addEventListener("click", handleClick);
option2.addEventListener("click", handleClick);
option3.addEventListener("click", handleClick);
option4.addEventListener("click", handleClick);
option5.addEventListener("click", handleClick);
option6.addEventListener("click", handleClick);
