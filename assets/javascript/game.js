
//  PSEUDOCODE

// Instructions on how to play the game..... 
//1.    Pick a random word.
//2.    Take the player’s guess.
//3.    Quit the game if the player wants to.
//4.    Check that the player’s guess is a valid letter.
//5.    Keep track of letters the player has guessed.
//6.    Show the player their progress.
//7.    Finish when the player has guessed the word.variables 

// 2. var answerArray = [];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var words = ["rachel","monica","chandler","ross","janice", "phoebe", "joey","gunther"];
var answerWord= null;
var userGuess= null;

var chances= 10;
var points=0;

var letterArray=[];

var letterUsed =[];

var userWin=false;
var gameOver= false;


document.onkeyup = function(event){ 
	// console.log(event.key); (my comments ........)
	// Determines which exact key was selected. Make it lowercase
	    // var userGuess = String.fromCharCode(event.keycode).toLowerCase();
	    userGuess = event.key;
	   console.log(userGuess);
}
// First I want to make sure that the picked letter is contained in the randomly chosen word ...
// 1. Will pick a random word to start the game ....
var chooseWord= words[Math.floor(Math.random() * words.length)];
// function chooseWord () {
//     return words[Math.floor(Math.random() * words.length)];
// 		}
// var x = chooseWord();
// console.log(x);
console.log(chooseWord);

// 2. This will help me to put blanks on the lenght of the randomly chosen word

	// for (var i = 0; i < words.length; i++) {
	// 		answerArray[i] = "_";
	// 	}


// gives number of blanks that corresponds to the randomly chosen word 
function blanksFromAnswer (randomWord) {  
    var result = ""; 
    for (var i = 0; i < randomWord.length; i++) {
    // for ( i in randomWord ) {
        result = "_ " + result; 
        }
        return result;
    
  
}
 
var underScore =blanksFromAnswer(chooseWord);
console.log(underScore);
    // $("#chooseWord").html(result);
   

function loopWord(){
	//compare();
	for (var i=0; i < chooseWord.length; i++) {
		if (userGuess === chooseWord[i]){
			letterArray.push(userGuess);
			$("#chooseWord").text(letterArry.join(""));
		}
		console.log("results of loopWord" + letterArray);
	// 	else()
	}
}

function compare(){
	for ( var i=0; i<letterUsed.length; i++){
		if(userGuess===letterUsed [i]){
			console.log("letter already used");

		}
		else{
			letterUsed.push(userGuess);
		}
	}
}

// checks if the user has loss
function checkGameOver() {
	if(chances <= 0) {
		console.log("game over");
		gameOver = true;
	}
}





