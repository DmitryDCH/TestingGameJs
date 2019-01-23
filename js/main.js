
var words = ["javascript","esmascript","java"];
var word = words[Math.floor(Math.random()* words.length)];

var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
var guesses = 10;

while (remainingLetters > 0 && guesses > 0 ) {
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter, or click cancel to stop game");
    if (guess === null) {
        break;
    } else if (guess.length !== 1){
        alert("Enter a single letter");
    }else{
        guesses--;
        guess = guess.toLocaleLowerCase();
        for (var j = 0; j < word.length; j++) {
            if (word[j] == guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
if (guesses > 0) {
    alert("Отлично! Было загадано слово " + word);
} else {
    alert("Очень плохо! Было загадано слово " + word);
}