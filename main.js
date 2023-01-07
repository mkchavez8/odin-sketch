const container = document.querySelector('.container');
    container.style.cssText = 'display: flex; justify-content: center; width: 900px;'

let gridSize = 10;
// prompt('Enter a number for size of the grid');
createGrid(gridSize);

function createGrid(size) {

    if (size > 100) {
        size = 100;
    }

    for (i = 0; i < gridSize; i++) {
        const columns = document.createElement('div');
            columns.classList.add('column');
            columns.style.cssText = 'outline: 1px solid black;'
            container.appendChild(columns);
        
        for (j = 0; j < gridSize; j++) {
            const tiles = document.createElement('div');
                tiles.classList.add('tile');
                tiles.style.cssText = 'padding: 15px; outline: 1px solid black;'
                columns.appendChild(tiles);
        };
    };
}




const shade = document.querySelectorAll('.boxes')
shade.forEach(boxes => {
    boxes.addEventListener('mousedown', function() {
        boxes.style.cssText = 'padding: 15px; border-style: solid; background-color: black;';
    })
})