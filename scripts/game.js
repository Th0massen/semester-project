
var canvas = document.getElementById("GameBoard");
// set up canvas
if(canvas.getContext){
	var ctx = canvas.getContext("2d");
	document.body.style.textAlign = "center";
	canvas.width = 950;
	canvas.height = 500;
    canvas.style.border = "1px solid black";
    canvas.style.background = "white";
} else{
    alert("HTML canvas is not supported in your browser<br>Please fix this error");
}

// Create game board
function buildBoard(){
    console.log('Preparing the game board...');
    console.log('Game board ready.');
}

// Create player token
function player(){
    console.log('Placing the player(s)...');
    console.log('Players ready.');
}

// Build game
function init(){
    console.log('Initializing game...');
    buildBoard();
    player();
    console.log('Game ready.');
}

window.onload = init();