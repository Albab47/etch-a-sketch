const main = document.querySelector(".main");
const sketchArea = document.getElementById("grid-container");
const widthAndHeight = sketchArea.offsetWidth;

// function to generate square grids
function generateGrid(gridSize, parentElement) {
  const widthOrHeight = `${widthAndHeight / gridSize}px`;
  const numOfSquares = gridSize * gridSize;

  for (let i = 0; i < numOfSquares; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.width = widthOrHeight;
    gridSquare.style.height = widthOrHeight;
    gridSquare.classList.add("grid-square");
    gridSquare.addEventListener("mouseenter", () => {
      gridSquare.style.background = "#010101";
    });
    parentElement.appendChild(gridSquare);
  }
}

// function to get random RGB color
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("DOMContentLoaded", () => {
  generateGrid(16, sketchArea);
});

// button that take input from user and display generated grid
const btnGridSize = document.getElementById("btnGridSize");
btnGridSize.addEventListener("click", () => {
  const gridSize = parseInt(prompt("Enter the grid size: "));

  if (gridSize >= 100 || isNaN(gridSize)) {
    alert("Please enter number between 1 to 100");
    gridSize = parseInt(prompt("Enter the grid size: "));
  }

  main.removeChild(document.getElementById("grid-container"));
  const sketchArea = document.createElement("div");
  sketchArea.setAttribute("id", "grid-container");
  generateGrid(gridSize, sketchArea);
  main.appendChild(sketchArea);
});

// btn event to clear the sketch
const btnClearSketch = document.getElementById("btnClearSketch");
btnClearSketch.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.style.background = "#fff";
  });
});

// btn event to get random rgb color
const btnRainbow = document.getElementById("btnRainbow");
btnRainbow.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.background = getRandomRGB();
    });
  });
});

// btn event to get darken color effect
const btnDarkenColor = document.getElementById("btnDarkenColor");
btnDarkenColor.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);

    square.addEventListener("mouseenter", () => {
      let interaction = 0;
      if (interaction < 10) {
        square.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
        colorR -= (colorR * 10) / 100;
        colorG -= (colorR * 10) / 100;
        colorB -= (colorR * 10) / 100;
        interaction++;
      }
    });
  });
});

// btn event that erase
const btnErase = document.getElementById("btnErase");
btnErase.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#fff";
    });
  });
});
