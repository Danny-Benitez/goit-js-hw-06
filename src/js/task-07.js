const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const defaultFontSize = "16px";
fontSizeControl.value = parseInt(defaultFontSize);
text.style.fontSize = defaultFontSize;

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  text.style.fontSize = fontSize;
});
