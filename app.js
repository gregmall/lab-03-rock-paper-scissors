// import functions and grab DOM elements
import { getRandomThrow, checkResults } from  './r-p-g.js';
// initialize state
const myButton = document.getElementById('play-button');
const winsSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');
const drawSpan = document.getElementById('draw');
const comentateSpan = document.getElementById('comentate');


let draw = 0;
let wins = 0;
let total = 0;
let loss = 0;

// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    const playerChoice = document.querySelector('input:checked');
    

    let choice = playerChoice.value;
    console.log(choice);
    let computerChoice = getRandomThrow();
    console.log(computerChoice);
   
    let game = checkResults(choice, computerChoice);
    if (game === 'win'){
        wins ++;
        total ++;
    } else if (game === 'draw'){
        draw++;
        total++;

    } else{
        loss++;
        total++;
        
    }
    winsSpan.textContent = wins;
    lossSpan.textContent = loss;
    totalSpan.textContent = total;
    drawSpan.textContent = draw;
    comentateSpan.textContent= 'You ' + checkResults(choice, computerChoice) + ' with a ' + choice + ' against a ' + computerChoice;
   
});
