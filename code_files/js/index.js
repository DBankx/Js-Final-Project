/**
 * JavaScipt - Find the penguins project
 * Names: Joel Macwan, Hundeyin Oluwadamilola, Deepanshu Joshi, Hrithik Malhotra
 */

var tickAudio = new Audio('../audio/tick.mp3');
var bombAudio = new Audio('../audio/bomb.mp3');
var tadaAudio = new Audio('../audio/tada.mp3');
var yetiPosition = Math.floor((Math.random() * 9) + 1);

$(document).ready(function () {
    var score = 0;
    var highScore = 0;

    //This code will run after the page loads
    $("#score").html('Score : '+score+'<br> High Score : '+highScore);
    $("#yeti").mousedown(function () {
        alert("Yaaaarrrr!");
});

    //Shuffling Random Images
RandomImage();

$(".Peng").on('click', function (event) {
    setGame($(this));
});

// what happens when a tile is clicked
function setGame(pen) {
    // get the id of the penguin
    var num = pen.attr('id');

    // get the number of the penguin id
    var Char = num.substr(num.length - 1);

    // if the tile has the yeti monster stop the game
    if (pen.hasClass("Peng yeti")){

        // play the bomb audio to indicate loss
        bombAudio.play();

        // show the yeti image on picked tile
        pen.css('background-image', 'url(images/yeti.png)');

        // alert the user that yeti was clicked
        alert("Yaaaarrrr ! Its Yeti");

        // if score is greater than high score change the high score
        if(score > highScore) {
            highScore = score;
        }

        // display new score data
        $("#score").html('Score: '+score+'<br> High Score : '+ highScore);

        // inform user game is over
        alert("Game Over. Want to Play Next Game Click Ok.");

        // restart game
        restartGame();
    }
    else
    {
        if(!pen.attr('style')){
            tickAudio.play();
            // increase score count by one
            score = score + 1;
            pen.css('background-image', 'url(images/penguin_' + Char + '.png)');
            $("#score").html('Score : '+score+'<br> High Score : '+ highScore);
        }
    }
}


function restartGame(){

    // reset score counter
    score = 0;

    // display new score counter
    $("#score").html('Score: '+score+'<br> High Score : '+ highScore);

    // get all the tiles
    var imgArr = $('.Peng');

    // remove all the penguins and yeti styling from tiles
    for (let i = 0; i < imgArr.length; i++){

        // remove yeti class and change the attributes back to normal
        if($(imgArr[i]).attr('id') === `yeti`){
            $(imgArr[i]).removeClass('yeti');
            $(imgArr[i]).attr('id', `penguin${i+1}`);
        }

        //remove all stylings for tiles
        $(imgArr[i]).removeAttr('style');

    }

    // change yeti position to new randomized position
    yetiPosition = Math.floor((Math.random() * 9) + 1);

    // randomize yeti
    RandomImage();

}

function RandomImage() {
    // add the yeti class to a random penguin tile
    $("#penguin" + yetiPosition).addClass('yeti');
    $("#penguin" + yetiPosition).attr('id', 'yeti');
}

});