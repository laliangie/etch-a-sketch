const container = document.querySelector('.container');

let button = document.querySelector('.btn');
button.addEventListener('click', ()=> {
    let userChoice = prompt("How many boxes do you want? (up to 100)");
    container.innerText = "";
    if (userChoice <= 100) {
        createCells(userChoice);
        div.innerText = `${userChoice} x ${userChoice}`

   
   /*     for (let i=1; i<=userChoice; i++) {
        let cell = document.createElement('div');
        cell.textContent = `${i}`;
        container.appendChild(cell);
    }*/} else {
        alert("Enter a number up to 100 only!")
    }
})

function createCells(a) {
for (let i=1; i <a*a; i++) {
    const div = document.createElement('div');          // 1) Create cells in DOM
    div.setAttribute('class', 'cell')                 // 2) Assign a class to it ('cell')
    container.appendChild(div);                       // 3) Append it to the container
    container.style.gridTemplateColumns = `repeat(${a}, ${980/a}px)`; /*16*/ 
    container.style.gridTemplateRows = `repeat(${a}, ${980/a}px)`;      /*64 */
    //div.textContent = `${i}`;
    div.addEventListener ('mouseenter', () => {           // 4) Create event when mouse passes over cells
        let rgbOne = Math.floor((Math.random() *255)+1);
        let rgbTwo = Math.floor((Math.random() *255)+1);
        let rgbThree = Math.floor((Math.random() *255)+1);
        div.style.background = `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`;
    })
}
}
createCells(16);