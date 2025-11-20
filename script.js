const container = document.querySelector("#container");

function add_square(flexBasisValue) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.flexBasis = flexBasisValue;
    container.appendChild(square);
}

function create_grid(x) {
    let percent = 100/x + "%";
    for(let i = 0; i < x*x; i++) {
        add_square(percent);
    }
    container.style.border = "0.4em rgb(149, 213, 255) solid";
}

function squareHover() {
    const squareElements = document.querySelectorAll(".square");

    squareElements.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black"; 
        })
    })
}

function delete_grid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

let gridExsist;

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    
    if(gridExsist == 1) {
        delete_grid();
        gridExsist = 0;
    }
    
    const nrTimes = prompt("Enter a number:");
    if (1 <= nrTimes && nrTimes <= 100) {
        create_grid(nrTimes);
        gridExsist = 1;
    } else {
        alert("The number must be between 1 and 100")
    }

    squareHover();
})