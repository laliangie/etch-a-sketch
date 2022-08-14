const container = document.querySelector('.container');

function createCells() {
for (let i=1; i <257; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'cell')
    container.appendChild(div);
    div.textContent = `${i}`;
}}

createCells();