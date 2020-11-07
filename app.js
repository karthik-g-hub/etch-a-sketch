const main = document.querySelector(".main");
const box = document.createElement("div");
const button = document.querySelector(".button");
const div = document.querySelector("div");
box.classList.add("box");
let n = 4;
setGrid(n);

function setGrid(n) {
  main.innerHTML = "";
  main.classList.toggle(`grid-${n}x`);
  for (let i = 1; i <= n * n; i++) {
    const box = document.createElement("div");
    main.appendChild(box);
    box.classList.add("box");
  }
}

function newGridSize() {
  main.classList.remove(`grid-${n}x`);
  n = prompt("Enter new grid size(1-10):");
  setGrid(n);
  highlightBox();
}

button.addEventListener("click", newGridSize);

highlightBox();
function highlightBox() {
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function () {
      this.classList.toggle("active");
    });
  }
}
