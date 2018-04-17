var wordBank = ["cowboy", "mustang", "tumbleweed", "saloon", "revolver", "outlaw", "indians", "saddle", "sheriff", "cattle", "lasso", "whiskey", "shotgun", "stagecoach", "buffalo", "railroad"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongLetter = [];
var userGuesses = [];
var underscores = [];
var randomWord;
var winCounter = 0;

function startGame() {
    underscores = [];
    wrongLetter = [];
    //picks random word on call startGame
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);

    for(var i = 0; i < randomWord.length; i++) {   //for loop generating an underscore for every letter in the word

        underscores.push('_ ');
        
        
    }
    //happens everytime on start
    document.getElementById("wordBlanks").textContent = underscores;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("letterGuessed").textContent = wrongLetter;

};

    //function to see if you have won yet
function win() {
    if(winCounter === randomWord.length) {
            alert("You Win! Click the button to play again.");
            wins++;
            guessesLeft = 10;
            winCounter = 0;
    } else if(guessesLeft === 0) {
            alert("You Lose! Click the button to try again.");
            losses++;
            guessesLeft = 10;
            winCounter = 0;
            
    }
};

    document.onkeyup = function(event) {
        userGuesses = event.key;
        
        if(randomWord.indexOf(userGuesses) > -1) {
            
            for(var i = 0; i < randomWord.length; i++) {   //finding if letter is guess is anywhere in randomWord

                if(randomWord[i] === userGuesses) {
                    underscores[i] = userGuesses;
                    document.getElementById("wordBlanks").textContent = underscores;
                    winCounter++;
                    win();
                }

            } //for loop ending
            
        } else {
            wrongLetter.push(userGuesses);
            document.getElementById("letterGuessed").textContent = wrongLetter;
            console.log(wrongLetter);
            guessesLeft--;
            document.getElementById("guessesLeft").textContent = guessesLeft;
            win();
            // document.getElementById("lettersGuessed").textContent = wrongLetter;
        }

    }; //on key up function









