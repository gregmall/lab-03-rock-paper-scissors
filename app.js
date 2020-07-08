// import functions and grab DOM elements
import { getRandomThrow, checkResults } from  './r-p-g.js';
// initialize state
const myButton = document.getElementById('play-button');


let wins = 0;
let total = 0;

// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    const playerChoice = document.querySelector('input:checked');
    

    let choice = playerChoice.value;
    console.log(choice);
    let computerChoice = getRandomThrow();
    console.log(computerChoice);
   
    let game = checkResults(choice, computerChoice);
    console.log(game);

   
});