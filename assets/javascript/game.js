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




$("#red").on("click", function () {
  // console.log($(this))x
  var num = parseInt(crystal.red.value);

  currentScore = currentScore + num;
  $('#score').text(currentScore)
  winCheck();
});


function winCheck() {
  if (currentScore === targetScore) {
    wins = wins + 1;
    alert("You Win");
    $("#wins").text(`wins: ${wins}`);
    startGame();
  }

  else if (currentScore > targetScore) {
    losses = losses + 1
    alert("You Lose");
    $("#losses").text(`losses: ${losses}`)
    startGame();
  }
}


function Reset() {
  startGame()










}














//   console.log(crystal.red.value);
//   $("#score").prepend(crystal.red.value)
//   console.log(num);

// });

$("#blue").on("click", function () {
  // console.log($(this))
  console.log(crystal.blue.value);
  var num = parseInt(crystal.blue.value);
  currentScore = currentScore + num;
  $('#score').text(currentScore)
  winCheck();


});

$("#yellow").on("click", function () {
  // console.log($(this))
  console.log(crystal.yellow.value);
  var num = parseInt(crystal.yellow.value);
  currentScore = currentScore + num;
  $('#score').text(currentScore)
  winCheck();
});


$("#green").on("click", function () {

  console.log(crystal.green.value);
  var num = parseInt(crystal.green.value);
  currentScore = currentScore + num;
  $('#score').text(currentScore)
  winCheck();
});



// var crystalNumber;
var losses = 0;
var wins = 0;
// var currentScore = 0;
// var targetScore = 0;

// ///match clicks to crystals
// var addValues = function (clickedCrystal) {
//   currentScore += clickedCrystal.value;
//   $("score").text(currentScore);
//   //run the function that checks for wins and losses
// }


// var winCount = 0;
// var lossCount = 0;

// var checkWin = function(){
//   if(currentScore > targetscore){
//     alert('you lost');
//     lossCount++;
//     $(#LOSS DIV).text(lossCount);
//     startGame();
//   } else if (currentScore === targetScore){

//   }
// }