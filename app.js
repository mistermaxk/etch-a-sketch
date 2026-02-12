// etch-a-sketch
// max k 2026

const changeGrid = document.createElement("button");
changeGrid.textContent = "Change Grid Size";
changeGrid.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Enter an integer between 4 and 100:", 16));
    if (gridSize < 4) gridSize = 4;
    else if (gridSize > 100) gridSize = 100;
    const container = document.querySelector("div.container");
    document.body.removeChild(container);
    createGrid(gridSize);
});
document.body.appendChild(changeGrid);


function createGrid(size = 16) {
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.flexBasis = `${100/size}%`;
        square.style.height = `${100/size}%`;
        square.addEventListener("mouseover", (e) => hoverEffect(e));
        container.appendChild(square);
    }
}

function hoverEffect(e) {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
}

createGrid();