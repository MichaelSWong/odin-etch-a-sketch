// Get Elements
let grid = document.querySelector('.grid');
let gridSize = document.querySelector('.grid-size');
let gridInput = document.querySelector('input');
let applyGridSize = document.querySelector('.apply');
const resetBtn = document.querySelector('.reset');
let squareSize = 8;

const createDiv = (size) => {
  const div = document.createElement('div');
  div.classList.add('square');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  return div;
};

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
};

const reset = () => {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
};

grid.addEventListener('mouseover', (e) => {
  if (e.target.matches('.square')) {
    e.target.classList.add('active');
  }
});

gridInput.addEventListener('input', (e) => {
  squareSize = e.target.value;
  gridSize.textContent = `${squareSize}x${squareSize}`;
});

applyGridSize.addEventListener('click', () => {
  reset();
});

resetBtn.addEventListener('click', reset);

createGrid(squareSize);
