const container = document.querySelector('.container');
container.style.cssText = 'display: flex; align-items: stretch;'

// Loop to create 16 divs under the container element
for (i = 0; i < 16; i++) {
    const divs = document.createElement('div');
    divs.classList.add('boxes');
    divs.style.cssText = 'padding: 10px; margin: 10px; border-style: solid';
    container.appendChild(divs);
}

// Write out pseudocode and break down different steps. Will need to refactor code above to allow for a user's input


