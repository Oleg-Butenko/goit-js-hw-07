function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const body = document.querySelector("body")

btn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
})