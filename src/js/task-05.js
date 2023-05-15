const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

if (nameInput) {
  nameInput.addEventListener("input", () => {
    const inputString = nameInput.value.trim();
    nameOutput.textContent = nameInput.value || "Anonymous";
  });
}
