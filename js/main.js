const grid = document.querySelector("#grid");
const changeSize = document.querySelector("#size");
const reset = document.querySelector("#reset");
let gridBoxes;
let size = prompt("How many squares per side do you want for your grid?");

function createGrid(size) {
    //set the gridTemplateRows and gridTemplateColumns to repeat `size` times and take up ‘1fr’ of space.
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    //we assign each grid to class `gridBox` and use for-loop to add all grids to id `grid`
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList.add("gridBox");
        grid.appendChild(div);
    }
    //add event listener
    gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", (e) => {
            gridBox.classList.add("active");
        })
    });
}

reset.addEventListener('click', (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
});

changeSize.addEventListener('click', (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
    size = prompt("How many squares per side do you want for your grid?");
    createGrid(size);
});

createGrid(size);