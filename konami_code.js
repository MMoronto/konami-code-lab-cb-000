const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener("keydown", (event) => {
    if (e.key === codes[i]) {
      i++;
      
      if(i === codes.length) {
      return e.preventDefault()
    } else {
      console.log(e.key)
    } 
  })
}
