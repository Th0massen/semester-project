
// Global variables
var PlayerScore_1 = 1;
var PlayerScore_2 = 1;
var playerTurn = 1;

// Set up container
var container = document.getElementById('GameContainer');
    container.style.border = "1px solid black";
    container.style.display = "block";
    container.style.background = "white";
    container.style.width = "800px";
    container.style.margin = "50px auto";
    container.style.padding = "20px";

// Render the game objects
function renderGame(){
    buildBoard();
    players();
}

// Render game board
function buildBoard(){
    var tileX = document.createElement('div');
    tileX.setAttribute('class', 'Tile_X');
    var colY = document.createElement('div');
    colY.setAttribute('class', 'Tile_Y');
    var tileX_2 = document.createElement('div');
    tileX_2.setAttribute('class', 'Tile_X');
    var colY_2 = document.createElement('div');
    colY_2.setAttribute('class', 'Tile_Y_reversed');
    var tileX_3 = document.createElement('div');
    tileX_3.setAttribute('class', 'Tile_X');
    // Row 1
    for(let i = 1; i <= 11; i++){
        let tile = document.createElement('div');
        let tileText = document.createElement('p');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        tileX.appendChild(tile);
        container.appendChild(tileX);
    }
    // Col 1
    for( let i = 12; i < 14; i++ ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        let tileText = document.createElement('p');
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        colY.appendChild(tile);
        container.appendChild(colY);
    }
    // Row 2
    for( let i = 24; i >= 14; i-- ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        let tileText = document.createElement('p');
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        tileX_2.appendChild(tile);
        container.appendChild(tileX_2);
    }
    //Col 2
    for( let i = 25; i < 26; i++ ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        let tileText = document.createElement('p');
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        colY_2.appendChild(tile);
        container.appendChild(colY_2);
    }
    // Row 3
    for(let i = 26; i <= 36; i++){
        let tile = document.createElement('div');
        let tileText = document.createElement('p');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        tileX_3.appendChild(tile);
        container.appendChild(tileX_3);
    }
}

// Player objects
function players(){
    var start = document.getElementById(1);
    var player1 = document.createElement('div');
    player1.setAttribute('class', 'Player');
    player1.setAttribute('id', 'playerOne');
    // get data from localStorage, to see what characters are chosen.
    var player1_Character = localStorage.getItem('Player 1');
    console.log( "Player 1 : " + player1_Character);
    start.appendChild(player1);
    var player2 = document.createElement('div');
    player2.setAttribute('class', 'Player');
    player2.setAttribute('id', 'playerTwo');
    // Player 2 character from localStorage
    var player2_character = localStorage.getItem('Player 2');
    console.log(  "Player 2 : " + player2_character);
    start.appendChild(player2);
}

function dice(){
    var Score = Math.floor(Math.random() * 5) + 1;
    checkTurn(playerTurn);
    console.log('Score : ' + Score);
    // Player 1 Controls
    if( playerTurn == 1 ){
        if( PlayerScore_1 > 36 ){
            console.log('Victory Player 1');
            document.getElementById('36').appendChild(document.getElementById('playerOne'));
        } else if( PlayerScore_1 == 36 ){
            console.log('Victory player 1');
            document.getElementById('36').appendChild(document.getElementById('playerOne'));
        } else if( PlayerScore_1 < 36 ){
            for( var i = 0; i < Score && i < 30; i++ ){
                PlayerScore_1 = PlayerScore_1 + 1;
                if( PlayerScore_1 == 36 ){
                    PlayerScore_1 = 36;
                    console.log('Victory P1');
                    document.getElementById(PlayerScore_1).appendChild(document.getElementById('playerOne'));
                }
                document.getElementById(PlayerScore_1).appendChild(document.getElementById('playerOne'));
            }
        }
    // Player 2 Controls
    } else if( playerTurn == 2 ){
        if( PlayerScore_2 > 36 ){
            console.log('Victory Player 2');
            document.getElementById('36').appendChild(document.getElementById('playerTwo'));
        } else if( PlayerScore_2 == 36 ){
            console.log('Victory Player 2');
            document.getElementById('36').appendChild(document.getElementById('playerTwo'));
        } else if( PlayerScore_2 < 36 ){
            for( var j = 0; j < Score && j < 30; j++ ){
                PlayerScore_2 = PlayerScore_2 + 1;
                if( PlayerScore_2 == 36 ){
                    PlayerScore_2 = 36;
                    console.log('Victory P2');
                    document.getElementById(PlayerScore_2).appendChild(document.getElementById('playerTwo'));
                }
                document.getElementById(PlayerScore_2).appendChild(document.getElementById('playerTwo'));
            }
        }
    }
}

// Function to check whos turn it is
function checkTurn(){
    if( playerTurn == 1 ){
        console.log('Player 1, Go!');
        playerTurn = playerTurn + 1;
        return playerTurn;
    } else{
        console.log('Player 2, Go!');
        playerTurn = playerTurn - 1;
        return playerTurn;
    }
}

window.onload = renderGame();