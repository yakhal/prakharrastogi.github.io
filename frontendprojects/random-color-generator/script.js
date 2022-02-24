const button = document.querySelector("button");

button.addEventListener("click", () => {
    const h1 = document.querySelector("h1");
    const body = document.querySelector("body");
    let color = `rgb(${getColorCode(0, 256)}, ${getColorCode(0, 256)}, ${getColorCode(0, 256)})`
    h1.innerText = color;
    body.style.backgroundColor = color;
})

function getColorCode(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}