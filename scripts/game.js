
var canvas = document.getElementById("GameBoard");
// set up canvas
if(canvas.getContext){
	var ctx = canvas.getContext("2d");
	document.body.style.textAlign = "center";
	canvas.width = 900;
	canvas.height = 450;
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

// Create game board
function buildBoard(){
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 90, 90);
    ctx.fillStyle = "#000000"
    ctx.strokeRect(0, 0, 90, 90);
    ctx.fillText("Start", 35, 45);
    buildTiles(9, 2, 90, 0, true, false, false);
    buildTiles(2, 9, 630, 90, false, true, false);
    buildTiles(2, 11, 810, 90, false, true, false);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect( 720, 180, 90, 90);
    ctx.fillStyle = "#000000"
    ctx.strokeRect( 720, 180, 90, 90);
    ctx.fillText('11', 720 + 45, 180 + 45);
    buildTiles(2, 13, 810, 270, false, true, false);
    buildTiles(8, 15, 720, 360, false, false, true);
    buildTiles(7, 11, 540, 180, false, false, true);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect( 0, 270, 90, 90);
    ctx.fillStyle = "#000000";
    ctx.strokeRect( 0, 270, 90, 90);
    ctx.fillText('18', 0 + 45, 270 + 45);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 360, 90, 90);
    ctx.fillStyle = "#000000";
    ctx.strokeRect(0, 360, 90,90);
    ctx.fillText('Win', 0 + 35, 360 + 45);
    ctx.stroke();
}

// Create player token
function player(){
    console.log('Placing the player(s)...');
    console.log('Players not found.');
}

// Build game
function init(){
    console.log('Initializing game...');
    buildBoard();
    player();
    console.log('Game ready.');
}

window.onload = init();