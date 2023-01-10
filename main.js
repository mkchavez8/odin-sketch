const container = document.querySelector('.container');
const navBar = document.querySelector('.navBar');

let gridSize = 5; //prompt('Enter a number for size of the grid');
createGrid(gridSize);

function createGrid(size) {
    let gridArea = gridSize * gridSize;

    if (size > 100) {
        size = 100;
    }

    for (i = 0; i < gridArea; i++) {
        let gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');
            container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
            container.appendChild(gridItem);
    };
    const shade = document.querySelectorAll('.gridItem')
        shade.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function() {
        gridItem.style.cssText = 'background-color: black;';
        // Want to split the anonymous function below into a real one
        });
    });
};

let gridButton = document.createElement('button');
    gridButton.textContent = 'Choose Grid Size';
    navBar.appendChild(gridButton);
