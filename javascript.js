const container = document.querySelector("#container");

let size = 10;

// Create function to display grid
function getSize(size) {
  for (let i = 0; i < size; i++) {
    let columns = document.createElement("div");
    container.appendChild(columns).className = "columns";
    for (let i = 0; i < size; i++) {
      let rows = document.createElement("div");
      columns.appendChild(rows).className = "rows";
      rows.style.backgroundColor = "white";
    }
  }
}

getSize(size);

// Create a function to draw on grid
const rows = document.querySelectorAll(".rows");

function draw(rows) {
  for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("mouseover", mouseOver);
    rows[i].addEventListener("mouseout", mouseOut);
    function mouseOver() {
      rows[i].style.backgroundColor = "black";
    }

    function mouseOut() {
      rows[i].style.backgroundColor = "black";
    }
  }
}

draw(rows);

// Create prompt to determine size with a maximum of 100

function resetGrid() {
  const columns = document.querySelectorAll(".columns");
  for (let i = 0; i < columns.length; i++) {
    columns[i].remove();
  }
}

function getGridSize(size) {
  resetGrid();
  let gridSizeUserInput = prompt(
    "Please provide a number above 0 but less than 100."
  );

  if (gridSizeUserInput < 1 || gridSizeUserInput > 100) {
    alert("Only provide a number between 1 and 100.");
    getGridSize(size);
  }

  size = gridSizeUserInput;
  getSize(size);
  const rows = document.querySelectorAll(".rows");
  draw(rows);
}

// Create reset button
function resetBtn() {
  resetGrid();
  getSize(size);
  const rows = document.querySelectorAll(".rows");
  draw(rows);
}
