var wordBank = ["cowboy", "mustang", "tumbleweed", "saloon", "revolver", "outlaw", "indians", "saddle", "sheriff", "cattle", "lasso", "whiskey", "shotgun", "stagecoach", "buffalo", "railroad"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongLetter = [];
var userGuesses = [];
var underscores = [];
var randomWord;

function startGame() {
    //picks random word on call startGame
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);

    for(var i = 0; i < randomWord.length; i++) {   //for loop generating an underscore for every letter in the word

        underscores.push('_');
        
    }
    //happens everytime on start
    document.getElementById("wordBlanks").textContent = underscores;

    document.onkeyup = function(event) {
        userGuesses = event.key;
        
        if(randomWord.indexOf(userGuesses) > -1) {
            
        } else {
            wrongLetter.push(userGuesses);
            
        }

    }; //on key up function


}






