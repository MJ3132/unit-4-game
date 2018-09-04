// player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



//Global variables 
//============================================================

// show a random number
//var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var targetNumber = Math.floor(Math.random() * (120 - 9 + 1)) + 9;
//var gems = $(".image-container");
var scoreCounter = 0;
var wins = 0;
var losses = 0;
var images = ["http://www.decocraftstore.com/ekmps/shops/d1a540/images/13mm-x-18mm-lilac-teardrop-shape-acrylic-embellishment-gems-2430-p.jpg   ",
"https://4.imimg.com/data4/EV/IX/MY-24672552/octagon-green-emerald-500x500.jpg",
"http://www.riogems.com/gems/sa97x64pe-1-1.jpg",
"http://www.decocraftstore.com/ekmps/shops/d1a540/images/13mm-x-18mm-hot-pink-teardrop-shape-acrylic-embellishment-gems-2420-p.jpg"];





//DOM 
//============================================================
// link random number

//$("#number-guess").html("number to guess :" + targetNumber);
// instructions
$("#show").on("click", function () {
    $("#explanation").toggle();
})  
// score counter
$("#score-counter").text("Score Counter :" +  scoreCounter);
// wins
$("#wins").text("Wins : " + wins);
//losses
$("#losses").text("Losses : " + losses);






//reset
//  scoreCounter = 0;
//  wins = 0;
//  losses = 0;



//PROCESS
//============================================================

// Display random number


    //attribute different fixed values to every gem per round
    
    var resetGame = function () {
    
    targetNumber = Math.floor(Math.random() * (120 - 9 + 1)) + 9;
    $("#number-guess").html("number to guess :" + targetNumber);

     $("#crystals").empty();

        for(var i=0; i < 4; i++){

    var ranNum = Math.floor(Math.random() * 11) +1;
    var crystal = $("<div>");
    crystal.attr("class", "crystal");
    crystal.attr("data-random", ranNum);
    crystal.attr("src", ranNum);

    crystal.css({
        "background-image":"url(" + (images[i]) + ")",
        "background-size":"cover"
        
    })
    $("#crystals").append(crystal);


        }
    
    }
    resetGame();


    // event delegation , if you reset and create new elements, the listener wont follow since
    // it was attached to the previous, by adding document, the DOM will track any new elements being added
    // in order for the listener to still apply to the new created elements
    $(document).on("click",".crystal", function () {

        var num = parseInt($(this).attr("data-random"));// targets the specific crystal being clicked
        
        scoreCounter += num;
        $("#score-counter").text("Score Counter :" +  scoreCounter);

        console.log(scoreCounter);
    
            if (scoreCounter === targetNumber) {
                // wins

                wins += 1;

                scoreCounter = 0;

                $("#wins").text("Wins : " + wins);

                resetGame();

               

            }
            
                else if (scoreCounter >= targetNumber) {
                    losses += 1;

                    scoreCounter = 0;
                
                    $("#losses").text("Losses : " + losses);

                    resetGame();



                 
    
                }
                $("#reset-game").on("click",function() {
               
                    resetGame();  
                    scoreCounter = 0;
                    losses = 0;
                    wins = 0;
                
                    $("#losses").html("Losses : " + losses);
                    $("#wins").html("Wins : " + wins);
                    $("#score-counter").html("Score Counter :" +  scoreCounter);

                  });
                  
           
        });
        

     // reset/start





        
