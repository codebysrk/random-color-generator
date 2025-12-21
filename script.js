const box = document.querySelector(".box");
const btn = document.querySelector("button");
const getRandomNum = (max, min = 0) =>
  Math.round(Math.random() * (max - min + 1) + min);

btn.addEventListener("click", () => {
  const r = getRandomNum(255);
  const g = getRandomNum(255);
  const b = getRandomNum(255);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  box.style.backgroundColor = rgb;
});
