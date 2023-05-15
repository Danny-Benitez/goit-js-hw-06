const counter = document.getElementById("counter");

const decrementButton = counter.querySelector('[data-action = "decrement"]');

const incrementButton = counter.querySelector('[data-action = "increment"]');

const valueButton = counter.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue--;

  valueButton.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue++;

  valueButton.textContent = counterValue;
});
