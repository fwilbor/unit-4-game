alert('our JS is linked!');


var winCount = 0;
var lossCount = 0;

var checkWin = function(){
  if(currentScore > targetscore){
    alert('you lost');
    lossCount++;
    $(#LOSS DIV).text(lossCount);
    startGame();
  } else if (currentScore === targetScore){

  }
}