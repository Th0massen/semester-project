
// Global Variables
var canvas = document.getElementById("GameBoard");

// Player Variables 
var playerTurn = 1;
var player1X = 45;
var player1Y = 5;
var player2X = 25;
var player2Y = 50;

// set up canvas
if(canvas.getContext){
	var ctx = canvas.getContext("2d");
	document.body.style.textAlign = "center";
	canvas.width = 900;
	canvas.height = 630;
    canvas.style.border = "1px solid black";
    canvas.style.background = "#2b2b2b";
} else{
    alert("HTML canvas is not supported in your browser. Please enable Javascript to play.");
}

// Create several tiles at once
function buildTiles(amount, num, startX, startY, goX, goY, reverse){
    var numberOfTiles = amount;
    var startPosX = startX;
    var startPosY = startY;
    var startNumb = num;
    var dirX = goX;
    var dirY = goY;
    var dirR = reverse;
    var width = 90;
    var height = 90;
    // Decide if it should follow X or Y
    var posX = startPosX;
    var posY = startPosY;
    var newNumb = startNumb;
    // Create the specified number of tiles
    for(var i = 0; i < numberOfTiles; i++){
        // If direction X is true
        if(dirX == true){
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(posX, posY, width, height);
            ctx.fillStyle = "#000000";
            ctx.strokeRect(posX, posY, width, height);
            ctx.fillText(newNumb, posX + 45, posY + 45);
            posX = posX + 90
            newNumb = newNumb + 1;
            // If direction Y is true
        } else if(dirY == true){
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(posX, posY, width, height);
            ctx.fillStyle = "#000000";
            ctx.strokeRect(posX, posY, width, height);
            ctx.fillText(newNumb, posX + 45, posY + 45);
            posY = posY + 90;
            newNumb = newNumb+ + 1;
        } else if(dirR == true){
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(posX, posY, width, height);
            ctx.fillStyle = "#000000";
            ctx.strokeRect(posX, posY, width, height);
            ctx.fillText(newNumb, posX + 45, posY + 45);
            posX = posX - 90
            newNumb = newNumb + 1;
        }
    }
}

// Create game board using a function to create rows of tiles.
function buildBoard(){
    ctx.beginPath();
    buildTiles(10, 1, 0 , 0 ,true, false, false);
    buildTiles(2, 11, 810, 90, false, true, false );
    buildTiles(9, 13, 720, 180, false, false, true);
    buildTiles(2, 14, 0, 270, false, true, false);
    buildTiles(9, 16, 90, 360, true, false, false);
    buildTiles(2, 24, 810, 450, false, true, false);
    buildTiles(9, 26, 810, 540, false, false, true);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect( 0, 540, 90, 90);
    ctx.fillStyle = "#000000";
    ctx.strokeRect( 0, 540, 90, 90);
    ctx.fillText('Kings Landing', 10, 540 + 45);
    ctx.stroke();
}

// Create player 1 token
function playerOne(){
    var playerOne = localStorage.getItem('Player 1');
    ctx.beginPath();
    ctx.fillRect(player1X, player1Y, 35, 35);
    ctx.stroke();
}

// Create player 2 token
function playerTwo(){
    var playerTwo = localStorage.getItem('Player 2');
    ctx.beginPath();
    ctx.fillRect(player2X, player2Y, 35, 35);
}

// Build game
function init(){
    buildBoard();
    playerOne();
    playerTwo();
    ctx.stroke();
}

window.onload = setInterval(init, 500);

// on button click, check if its player 1 or 2's turn.
function dice(){
    console.log('-----'); // Just a console divider, for readability
    if(playerTurn == 1){
        DiceResult(playerTurn);
        console.log("Player 2's Turn");
        playerTurn = playerTurn + 1;
    } else if(playerTurn == 2){
        DiceResult(playerTurn);
        playerTurn = playerTurn -1;
        return playerTurn;
    }
}

// Player X rolls the dice
function DiceResult(playerTurn){
    // Gets a random number between 1 - 6
    var Score = Math.round( Math.random() * 5 ) + 1;
    console.log('Player ' + playerTurn + " rolled a " + Score);
}
