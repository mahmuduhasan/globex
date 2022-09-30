const slider = document.querySelector("#trending");
const container = document.querySelector(".trend-cards");

let pressed = false;
let startAxis;
let axis;

slider.addEventListener("mousedown", (e) => {
  pressed = true;
  startAxis = e.offsetX - container.offsetLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();
  axis = e.offsetX;
  container.style.left = `${axis - startAxis}px`;
  checkBorder();
});

function checkBorder() {
  let outer = slider.getBoundingClientRect();
  let inner = container.getBoundingClientRect();
  if (parseInt(container.style.left) > 0) {
    container.style.left = "0px";
  } else if (inner.right < outer.right) {
    container.style.left = `-${inner.width - outer.width + 70}px`;
  }
}
