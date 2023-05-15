const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Add event listeners to the buttons
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

// Function to create boxes
function createBoxes() {
  // Get the amount from the input if it's not specified
  const amount = parseInt(input.value);
  if (!amount) {
    amount = input.value;
  }

  // Create the boxes
  let boxesHTML = "";
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const boxColor = getRandomHexColor();
    boxesHTML += `<div style="background-color: ${boxColor}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    boxSize += 10;
  }

  // Add the boxes to the container
  boxesContainer.innerHTML = boxesHTML;
}

// Function to destroy boxes
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Function to generate a random HEX color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
