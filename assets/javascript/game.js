var remainingGuesses = 6;
var wordBank = ["starbucks",
               "dog",
               "cat",
               "frog",
               "gorilla"];

    $("#guessCounter").html("Remaining guesses: " + remainingGuesses);
               
        document.getElementById("gameStartButton").onclick = function gameStart(){
            var randomizedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
            var splitWord = randomizedWord.split("");
            var blankSpaces = Array(randomizedWord.length).fill("_ ");

            $("#wordDisplay").html(blankSpaces);
            $("#guessCounter").html("Remaining guesses: " + remainingGuesses);
            console.log(splitWord);

            document.onkeyup = function(event){
            guessCounted = false;
            var userInput = event.key;
               for (i=0; i<splitWord.length; i++){
                   if (userInput === splitWord[i]){
                       guessCounted = true;
                       blankSpaces[i] = userInput;
                       $("#wordDisplay").html(blankSpaces);
                        }
                    }
                    if(guessCounted === false){
                        remainingGuesses--;
                        $("#guessCounter").html("Remaining guesses: " + remainingGuesses);
                    }
                }

                
            }