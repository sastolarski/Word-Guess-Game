//have array of words
//computer randomly selects a word from the array
//appropriate number of lines are displayed on screen, matching number of letters in selected word
//user inputs a key to guess a letter
//if key is correct, letter appears in the correct spot in the line
//if key is wrong, letter appears in guessed letters category
//10 wrong key guesses and the user loses, game resets with a new word
//if the user guesses all letters correct they win, game resets with a new word
    //possibly a play again alert appears, clicking ok will reset.
    //could do same for wins and losses, alert with play again, yes or no.

var wordBank = ["cowboy", "horse", "tumbleweed", "saloon", "revolver", "outlaw", "indians", "saddle", "sheriff", "cattle", "lasso"]

var wins = 0;
var losses = 0;
var lettersGuessed = [];

function myFunction() {     //game starts on button click in html

    var wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

    console.log(wordChoice);

    document.onkeyup = function(event) {    //after word is selected, user key input triggers next event

        var userGuess = event.key;

        lettersGuessed.push(userGuess);

        console.log(userGuess);
        console.log(lettersGuessed);
    }
}