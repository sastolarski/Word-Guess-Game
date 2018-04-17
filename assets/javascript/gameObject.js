var wordBank = ["cowboy", "mustang", "tumbleweed", "saloon", "revolver", "outlaw", "indians", "saddle", "sheriff", "cattle", "lasso", "whiskey", "shotgun", "stagecoach", "buffalo", "railroad"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongLetter = [];
var userGuesses = [];
var underscores = [];
var randomWord;

function startGame() {

    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);
}




