// PseudoCode Instructions Follow Step By Step

// jQuery Ready Function waits for the document to complete loading before initiating JavaScript
$(document).ready(function () { },

  // When random-button (Click Me) is clicked... Game Starts
  $("#random-button").on("click", function () {

    // Add to the Random number.

    //  Prepend the Random number to the top of our random-number div.
    $("#random-number").prepend("<br><hr>" + randomNumber);  




//   Click Game to Start and Generate Random Number between 19-120 .text to randomNumber <div> 
    let getRandomNumber = function (start, range) {

        let getRandom = Math.floor((Math.random() * range) + start);

        while (getRandom > range) {

            getRandom = Math.floor((Math.random() * range) + start);

        }
        return getRandom;
        
       }
       ,console.log(getRandomNumber(19, 120)));

    
   
    
    })


    // Run For Loop to Create 4 Crystals that produce Random Hidden Value between 1 - 12 








// ...create a string which will hold the Random number.
var lottoNumber = "";

    });
