var game = {
    wins: 0,
    losses: 0,
    guessesLeft: 0,
    lettersGuessed: [],
    wordBank: ["cowboy", "mustang", "tumbleweed", "saloon", "revolver", "outlaw", "indians", "saddle", "sheriff", "cattle", "lasso", "whiskey", "shotgun", "stagecoach", "buffalo", "railroad"],
    wordChoice: [],

    chooseWord: function() {
        var wordChoice = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        console.log(wordChoice);
        
    },

    createBlanks: function() {
        var underscore = this.wordChoice.replace(/./g, "_ ");
        console.log(underscore);
    },


};




