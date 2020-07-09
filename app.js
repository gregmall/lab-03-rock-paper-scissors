// import functions and grab DOM elements
import { getRandomThrow, checkResults, } from './r-p-g.js';
// initialize state
const myButton = document.getElementById('play-button');
const winsSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');
const drawSpan = document.getElementById('draw');
const comentateSpan = document.getElementById('comentate');
//Global states initiated
let draw = 0;
let wins = 0;
let total = 0;
let loss = 0;

// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    const playerChoice = document.querySelector('input:checked');
    

    let choice = playerChoice.value;
    //console.log(choice);
    let computerChoice = getRandomThrow();
    //console.log(computerChoice);
   
    let game = checkResults(choice, computerChoice);
    if (game === 'win'){
        wins ++;
        
    } else if (game === 'draw'){
        draw++;
        

    } else {
        loss++;
        
        
    }
    //Adds 1 to total every game
    total++;
    //displays wins/losses/total/draw
    winsSpan.textContent = wins;
    lossSpan.textContent = loss;
    totalSpan.textContent = total;
    drawSpan.textContent = draw;
    //Shows choice and computerChoice
    comentateSpan.textContent = 'You ' + game + ' with ' + choice + ' against ' + computerChoice;
   
});

