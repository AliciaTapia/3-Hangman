
//  PSEUDOCODE

// Instructions on how to play the game..... 
//1.    Pick a random word.
//2.    Take the player’s guess.
//3.    Quit the game if the player wants to.
//4.    Check that the player’s guess is a valid letter.
//5.    Keep track of letters the player has guessed.
//6.    Show the player their progress.
//7.    Finish when the player has guessed the word.variables 

// // 2. var answerArray = [];

var words = ["rachel","monica","chandler","ross","janice", "phoebe", "joey","gunther"];
var chosenWord= null;
var letterUsed =[];
var numBlanks = 0;
var blanksAndSuccesses=[];

var winCounter=0;
var lossCounter= 0;
var userGuesses= 9;
var wrongGuesses = [];


function startGame(){

//  1. select a word at random
chosenWord = words[Math.floor(Math.random() * words.length)];

// 2. want to break up that random word into letters and replace them with underscores
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;

for(var i = 0; i < numBlanks; i++){
    blanksAndSuccesses.push("_");
}

//3. we want to add those underscores to the HTML
$('.blanks').html(blanksAndSuccesses.join(" "));

//4. numguesses always equals 9, and blankandsuccess is an empty array, 
//and wronggueses is empty as well
userGuesses= 9;
blanksAndSuccesses=[];
wrongGueses = [];

console.log(chosenWord);
console.log(lettersInChosenWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);

}


function checkLetters(letter){
 
//1. Compare the letter the user picks matches any of the letters in the word
 var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;
        }
    }
    //2. I want a conditional statement to determine if the letter the user picked
	//is in the word. If so, do something, if not, do something else
    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(chosenWord[i] === letter){
            blanksAndSuccesses[i] = letter;

        }

        }
    //3. If the user is wrong we want to decrease the numGuesses variables by one    
    }else{
        userGuesses --;
        wrongGuesses.push(letter)
    }

    /*
    to check if a letter is already in the wrong guesses array. What we want to do
    is set up an if/else conditional that will run a for loop that will iterate over
    all the letters and then use the if/else to check if it it already exists.

    */
}

function roundComplete(){
    /*
    1. Its going to update the HTML with letters that are in the word
    2. Its going to update the HTML with guesses we have left
    3. Its going to update the HTML to show the wrong guesses
    4. Its going to determine whether the use won the game or not
    */

    $('.blanks').html(blanksAndSuccesses.join(" "));
    document.getElementById('guesses-left').innerHTML = userGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");


    if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
        winCounter++;
        alert("You win!!");
        document.getElementById('win-counter').innerHTML = winCounter;
       startGame();
    }else if(userGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("you don't have any more guesses");
        startGame();        
      
    }

}

startGame();

document.onkeyup = function(event){
    /*
    1. it going to take in the letter that we type in
    2. its going to pass it through the CheckLetter function 
    */
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("this is the letter we typed", letterGuessed)
    checkLetters(letterGuessed)
    roundComplete();

}

