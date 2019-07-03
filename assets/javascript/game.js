    var numBlue = Math.floor(Math.random() * 12) + 1;
    var numRed = Math.floor(Math.random() * 12) + 1;
    var numYellow = Math.floor(Math.random() * 12) + 1;
    var numPurple = Math.floor(Math.random() * 12) + 1;
    var trueFalse = false;
    var losses = 0;
    var wins = 0;
    $("#losses").html("Losses: " + losses);
    $("#wins").html("Wins: " + wins);
function restartFunc() {
    trueFalse = false;
    numBlue = Math.floor(Math.random() * 12) + 1;
    numRed = Math.floor(Math.random() * 12) + 1;
    numYellow = Math.floor(Math.random() * 12) + 1;
    numPurple = Math.floor(Math.random() * 12) + 1;
    min = Math.ceil(19);
    max = Math.floor(120);
    randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#randNum").html("Random Number: " + randNumber);
    newGame();
    }
    function loseFunc(){
        losses++;
        $("#losses").html("Losses: " + losses);
        var yourNumber = 0;
        $("#yourNum").html("Your Number: " + yourNumber);
        $("#restartIns").html("Game has ended: Please click a new crystal to restart.")
        restartFunc();
    }
    function winFunc(){
        wins++;
        $("#wins").html("Wins: " + wins);
        var yourNumber = 0;
        $("#yourNum").html("Your Number: " + yourNumber);
        $("#restartIns").html("Game has ended: Please click a new crystal to restart.")
        restartFunc();
    }
    function newGame(){
    $("#startGame").click(function(){
    min = Math.ceil(19);
    max = Math.floor(120);
    randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    var yourNumber = 0;
    $("#randNum").html("Random Number: " + randNumber);
    $("#startGame").remove();
    trueFalse = true;
    $("#yourNum").html("Your Number: " + yourNumber);
    $("#gameInfo").html("The crystals have been assigned random values.  Your goal is to get your value equal to the random number.");
    if(trueFalse) {
    $("#blue").click(function(){
        yourNumber = numBlue + yourNumber;
        $("#yourNum").html("Your Number: " + yourNumber);
        if (yourNumber > randNumber && yourNumber != 0) {
        loseFunc();
        yourNumber = 0;
    }
    else if (yourNumber === randNumber && yourNumber != 0)
    {
        winFunc();
        yourNumber = 0;
    }
    });
    $("#red").click(function(){
        yourNumber = numRed + yourNumber;
        $("#yourNum").html("Your Number: " + yourNumber);
        if (yourNumber > randNumber && yourNumber != 0) {
        loseFunc();
        yourNumber = 0;
    }
    else if (yourNumber === randNumber && yourNumber != 0)
    {
        winFunc();
        yourNumber = 0;
    }

    });
    $("#yellow").click(function(){
        yourNumber = numYellow + yourNumber;
        $("#yourNum").html("Your Number: " + yourNumber);
        if (yourNumber > randNumber && yourNumber != 0) {
        loseFunc();
        yourNumber = 0;
    }
    else if (yourNumber === randNumber && yourNumber != 0)
    {
        winFunc();
        yourNumber = 0;
    }
    });
    $("#purple").click(function(){
        yourNumber = numPurple + yourNumber;
        $("#yourNum").html("Your Number: " + yourNumber);
        if (yourNumber > randNumber && yourNumber != 0) {
        loseFunc();
        yourNumber = 0;
    }
    else if (yourNumber === randNumber && yourNumber != 0)
    {
        winFunc();
        yourNumber = 0;
    }
    });
    }
    });
}
newGame();