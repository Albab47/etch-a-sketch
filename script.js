const main = document.querySelector(".main");
const gridContainer = document.querySelector("#grid-container");
const gridBtn = document.querySelector(".btn-grid");

function generateGrid(gridSize, parentElement) {
  for (i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    parentElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    parentElement.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridSquare.addEventListener("mouseenter", () => {
      gridSquare.style.backgroundColor = "#000";
    });
    parentElement.appendChild(gridSquare);
  }
}

// making default 16 X 16 grid layout
generateGrid(16, gridContainer);

// button that randomly generate grid
gridBtn.addEventListener("click", () => {
  const gridSize = parseInt(prompt("Enter the grid size: "));

  if (gridSize >= 100 || isNaN(gridSize)) {
    alert("Please enter number between 1 to 100");
    prompt("Enter the grid size: ");
  } else {
    main.removeChild(document.querySelector('#grid-container'));
    const gridContainer = document.createElement("div");
    gridContainer.setAttribute('id', 'grid-container');
    generateGrid(gridSize, gridContainer);
    main.appendChild(gridContainer);
  }
});
