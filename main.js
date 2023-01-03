const container = document.querySelector('.container');
    container.style.cssText = 'display: flex; justify-content: center; flex-wrap: wrap; width: 700px; margin: auto;'

function makeBoxes() {
    const divs = document.createElement('div');
        divs.classList.add('boxes');
        divs.style.cssText = 'padding: 20px; border-style: solid;';
        container.appendChild(divs);
}

let number = 16;

for (i = 0; i < number; i++) {
    makeBoxes(number);
    for(j = 1; j < number; j++) {
        makeBoxes(number);
    };
}

const color = document.querySelectorAll('.boxes')
color.forEach(boxes => {
    boxes.addEventListener('mousedown', function() {
        boxes.style.cssText = 'padding: 20px; border-style: solid; background-color: black;';
    })
})