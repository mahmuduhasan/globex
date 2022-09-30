const deal_slider = document.querySelector("#deals");
const deal_container = document.querySelector(".deal-cards");

let dealPressed = false;
let startX;
let x;
deal_slider.addEventListener("mousedown", (e) => {
  dealPressed = true;
  startX = e.offsetX - deal_container.offsetLeft;
  deal_slider.style.cursor = "grabbing";
});

deal_slider.addEventListener("mouseup", () => {
  deal_slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  dealPressed = false;
});

deal_slider.addEventListener("mousemove", (e) => {
  if (!dealPressed) return;
  e.preventDefault();
  x = e.offsetX;
  deal_container.style.left = `${x - startX}px`;
  checkDealBorder();
});

function checkDealBorder() {
  let outer = deal_slider.getBoundingClientRect();
  let inner = deal_container.getBoundingClientRect();
  if (parseInt(deal_container.style.left) > 0) {
    deal_container.style.left = "0px";
  } else if (inner.right < outer.right) {
    deal_container.style.left = `-${inner.width - outer.width + 70}px`;
  }
}
