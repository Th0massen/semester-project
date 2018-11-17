
// Global Variables
var canvas = document.getElementById("GameBoard");
var posX = 0;
var posY = 0;

// set up canvas
if(canvas.getContext){
	var ctx = canvas.getContext("2d");
	document.body.style.textAlign = "center";
	canvas.width = 980;
    canvas.height = 900;
    canvas.style.border = "1px solid black";
} else{
    alert("HTML canvas is not supported in your browser. Please enable Javascript to play.");
}

// TileMap to render the gameboard from 
var map = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,],
    [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,],
    [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,],
    [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
];

// Initialize game
function init(){
    console.log('Preparing game..');
    ctx.beginPath();
    gameBoard();
    Players();
    ctx.stroke();
}

// Render the game board
function gameBoard(){
    var Counter = 0;
    var SecondCounter = 0;
    for( var i = 0; i < map.length; i++ ){
        for( var j = 0; j < map[i].length; j++ ){
            if( map[i][j] == 0 ){
                ctx.fillStyle = '#000000';
                ctx.fillRect( posX, posY, 70, 70 );
            } else if( map[i][j] == 1 ){
                ctx.fillStyle = '#FEFEFE';
                ctx.fillRect( posX, posY, 70, 70 );
                ctx.fillStyle = "#000000";
                ctx.strokeRect( posX, posY, 70, 70);
                // Reverse Board Numbers on 13
                if( Counter == 13 ){
                    for( SecondCounter = 24; SecondCounter >= 13; SecondCounter-- ){
                        ctx.fillStyle = "#000000";
                        ctx.strokeRect( posX, posY, 70, 70);
                        ctx.fillText(SecondCounter, posX + 35, posY + 35);
                        posX += 70;
                    }
                    ctx.fillRect( 910, posY, 70, 70 );
                }
                // Reverse Board Numbers on 39
                if( Counter == 39 ){
                    for( SecondCounter = 50; SecondCounter >= 39; SecondCounter-- ){
                        ctx.fillStyle = "#000000";
                        ctx.strokeRect( posX, posY, 70, 70);
                        ctx.fillText(SecondCounter, posX + 35, posY + 35);
                        posX += 70;
                    }
                    ctx.fillRect( 910, posY, 70, 70 );
                }
                // Reverse Board Number on 65
                if( Counter == 65 ){
                    for( SecondCounter = 76; SecondCounter >= 65; SecondCounter-- ){
                        ctx.fillStyle = "#000000";
                        ctx.strokeRect( posX, posY, 70, 70);
                        ctx.fillText(SecondCounter, posX + 35, posY + 35);
                        posX += 70;
                    }
                    ctx.fillRect( 910, posY, 70, 70 );
                }
                // First Tile
                else if( Counter == 0 ){
                    ctx.fillText("Start", posX + 5, posY + 35);
                } 
                // All the other tiles
                else{
                    ctx.fillText(Counter, posX + 35, posY + 35);
                }
                Counter = Counter + 1;
            }
            posX = posX + 70;
        }
        posX = 0;
        posY = posY + 70;
    }
}

// Render player icons
function Players(){
    console.log("Player Data Missing...");
}

window.onload = init();