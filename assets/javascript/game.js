alert('our JS is linked!');

var crystal = {
  blue: {
    name: "Blue",
    value: 0
  },
  green: {
    name: "Green",
    value: 0
  },
  red: {
    name: "Red",
    value: 0
  },
  yellow: {
    name: "Yellow",
    value: 0
  }
}

//function that generates random number for anything
let getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//function that creates the random target value 
//Get random number is the "target"



var startGame = function () {
  currentScore = 0;
  targetScore = getRandom(19, 120);
  crystal.red.value = getRandom(1, 12);
  crystal.blue.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  $("#score").text(currentScore);
  $("#random").text(targetScore);
  $()
  console.log("red = " + crystal.red.value);
  console.log("blue = " + crystal.blue.value);
  console.log("yellow = " + crystal.yellow.value);
  console.log("green = " + crystal.green.value);

  console.log(targetScore)
}

startGame();
// $(".randomNumber").prepend(getRandomNumber(19, 120));


$(".crystal").on('click', function () {
  console.log($(this));



})



var crystalNumber;
var loss = [];
var win;
var currentScore = 0;
var targetScore = 0;

///match clicks to crystals
var addValues = function (clickedCrystal) {
  currentScore += clickedCrystal.value;
  $("score").text(currentScore);
  //run the function that checks for wins and losses
}


var winCount = 0;
var lossCount = 0;

// var checkWin = function(){
//   if(currentScore > targetscore){
//     alert('you lost');
//     lossCount++;
//     $(#LOSS DIV).text(lossCount);
//     startGame();
//   } else if (currentScore === targetScore){

//   }
// }