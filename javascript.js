const container = document.querySelector("#container");

//Create prompt to determine size with a maximum of 100
let size = 10;

// Create function to display grid
function getSize(size) {
  for (let i = 0; i < size; i++) {
    let columns = document.createElement("div");
    container.appendChild(columns).className = "columns";
    for (let i = 0; i <= size; i++) {
      let rows = document.createElement("div");
      columns.appendChild(rows).className = "rows";
    }
  }
}

getSize(size);
