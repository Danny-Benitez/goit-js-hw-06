const input = document.querySelector("#validation-input");
const correctLength = input.getAttribute(`data-length`);

input.addEventListener("blur", () => {
  const enteredValue = input.value.trim();
  if (enteredValue.length === parseInt(correctLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
