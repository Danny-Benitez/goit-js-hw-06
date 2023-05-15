const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener('input', (event) => {
    const fontSize = event.target.value + 'px';
    text.style.fontSize = fontSize; 
});


