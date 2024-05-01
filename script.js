const effects = document.querySelectorAll(".effect");

console.log(effects);
function wave(text) {
  text.innerHTML = text.textContent
    .split("")
    .map((letter, index) => {
      return `<span style="transition-delay:${index * 50}ms">${letter}</span>`;
    })
    .join("");
}
effects.forEach(effect=>{
    effect.addEventListener('click',()=>{
        wave(effect.childNodes[1])
        console.log(effect.childNodes)
    })
})