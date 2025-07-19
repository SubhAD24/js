let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.loworHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true; // Make sure this is globally accessible

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault(); // Corrected syntax: e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess); // Display the last guess before game over message
            displayMessage(`Game over! The random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = ''; // Clear input field
    guessSlot.innerHTML += `${guess}  `; // Added two spaces for better separation
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`; // Updated remaining guesses
}

function displayMessage(message) {
    loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // Disable input field
    p.classList.add('button'); // Ensure 'button' class is applied for styling'
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`; // Changed text case for consistency
    startOver.appendChild(p);
    playGame = false; // Set game state to false
    newGame(); // Call newGame to attach the event listener to the newly created button
}

function newGame() {
    const newGameButton = document.querySelector('#newGame'); // This now correctly selects the element
    if (newGameButton) { // Added a check to ensure the button exists before adding listener
        newGameButton.addEventListener('click', function(e) {
            randomNumber = parseInt(Math.random() * 100 + 1); // Generate new random number
            prevGuess = []; // Reset previous guesses array
            numGuess = 1; // Reset guess count
            guessSlot.innerHTML = ''; // Clear previous guesses display
            remaining.innerHTML = `${11 - numGuess}`; // Reset remaining guesses display
            loworHi.innerHTML = ''; // Clear high/low message
            userInput.removeAttribute('disabled'); // Enable input field
            startOver.removeChild(p); // Remove the new game button
            playGame = true; // Set game state to true
        });
    }
}