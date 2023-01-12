const container = document.querySelector('.container');
const navBar = document.querySelector('.navBar');

let gridButton = document.createElement('button');
    gridButton.textContent = 'Choose Grid Size';
    gridButton.addEventListener('click', getGridSize);
    navBar.appendChild(gridButton);

function getGridSize() {
    let size = prompt('Enter a number for size of the grid');
    return size;
 };

function createGrid(gridSize) {
    let gridArea = gridSize * gridSize;

    if (gridSize > 100) {
        gridSize = 100;
    }

    for (i = 0; i < gridArea; i++) {
        let gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');
            container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
            container.appendChild(gridItem);
    };
    const color = document.querySelectorAll('.gridItem')
        color.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function() {
        gridItem.style.cssText = 'background-color: black;';
        // Want to split the anonymous function above into a real one
        });
    });
};

//  Initialization
createGrid(getGridSize());