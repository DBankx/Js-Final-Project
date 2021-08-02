
$(document).ready(function () {
    var score = 0;
    var highScore = 0;
       
       //This code will run after your page loads
    $("#score").html('Score : '+score+'<br> High Score : '+highScore);
    $("#yeti").mousedown(function () {
        alert("Yaaaarrrr!");
});
       
    //Shuffling Random Images//
RandomImage();
$(".Peng").on('click', function (event) {
   
    setGame($(this));  
});

    //Updating Score//
function setGame(pen) {
      
    score = score + 1;
    var num = pen.attr('id');
    var Char = num.substr(num.length - 1);
    if (pen.hasClass("Peng yetti")){
          
        pen.css('background-image', 'url(images/yeti.png)');
        alert("Yaaaarrrr ! Its Yetiiit");
        highScore = score;
        $("#score").html('Score: '+score+'<br> High Score : '+ highScore);
        alert("Game Over. Want to Play Next Game Click Ok.");
        location.reload();   
    } 
    else 
    {
        pen.css('background-image', 'url(images/penguin_' + Char + '.png)');
        $("#score").html('Score : '+score+'<br> High Score : '+ highScore);
    }
}
function RandomImage() {
   
    var random = Math.floor(Math.random() * 12);
    
        $("#penguin" + random).addClass('yetti');
        $("#penguin" + random).attr('id', 'yeti');
    }
    function empty(){
    }
});