const container = document.querySelector('.container');

let button = document.querySelector('.btn');
button.addEventListener('click', ()=> {
    let userChoice = prompt("How many boxes do you want? (up to 100)");
    container.innerText = "";
    if (userChoice <= 100) {
    for (let i=1; i<=userChoice; i++) {
        let cell = document.createElement('div');
        cell.textContent = `${i}`;
        container.appendChild(cell);
    }} else {
        alert("Up to 100 only!")
    }
})

function createCells() {
for (let i=1; i <257; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'cell')
    container.appendChild(div);
    div.textContent = `${i}`;
    div.addEventListener ('mouseenter', () => {
        let rgbOne = Math.floor((Math.random() *255)+1);
        let rgbTwo = Math.floor((Math.random() *255)+1);
        let rgbThree = Math.floor((Math.random() *255)+1);
        div.style.background = `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`;
    })
}}
createCells();