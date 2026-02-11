// etch-a-sketch
// max k 2026
const container = document.querySelector("#container");

function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.flexBasis = `${100/size}%`;
        square.style.height = `${100/size}%`;
        container.appendChild(square);
    }
}

createGrid(4);