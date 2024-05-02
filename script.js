const lables = document.querySelectorAll(".lable");

console.log(lables);
function wave(text) {
  text.innerHTML = text.textContent
    .split("")
    .map((letter, index) => {
      return `<span style="transition-delay:${index * 50}ms">${letter}</span>`;
    })
    .join("");
}
lables.forEach((lable) => {
  wave(lable);
  console.log(lable);
});

