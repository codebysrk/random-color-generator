const box = document.querySelector(".box");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const rgb = `rgb(${r},${g},${b})`;
  box.style.backgroundColor = rgb;
});