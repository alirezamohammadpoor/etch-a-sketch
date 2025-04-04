document.addEventListener("DOMContentLoaded", function () {
  createDivs(16, 16);
});

const gridContainer = document.querySelector(".grid-container");
const gridButton = document.querySelector(".new-grid");

gridButton.addEventListener("click", function () {
  let userInput = prompt("Please enter a number");
  userInput = Number(userInput);

  if (userInput <= 0 || userInput > 100) {
    alert("Please enter a number between 1 and 100");
  } else if (isNaN(userInput)) {
    alert("Please enter a valid number");
  } else {
    createDivs(userInput, userInput);
  }
});

function createDivs(rows, cols) {
  gridContainer.innerHTML = "";
  const size = 960 / rows;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const divGrid = document.createElement("div");
      divGrid.classList.add("grid-item");
      divGrid.style.width = size + "px";
      divGrid.style.height = size + "px";
      divGrid.addEventListener("mouseover", () => {
        divGrid.style.backgroundColor = "blue";
      });
      gridContainer.appendChild(divGrid);
    }
  }
}
