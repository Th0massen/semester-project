
// Initial site zoom
document.body.style.zoom = "90%";

// Global variables

var PlayerScore_1 = 1;
var PlayerScore_2 = 1;
var playerTurn = 1;


// Set up container

var container = document.getElementById('GameContainer');
    container.style.border = "1px solid black";
    container.style.display = "block";
    container.style.background = "white";
    container.style.width = "950px";
    //container.style.margin = "50px auto";
    container.style.padding = "70px";


// Render the game objects

function renderGame(){
    buildBoard();
    players();
}


// Render game board

function buildBoard(){
    // Containers for when the board is going forward
    var tileX = document.createElement('div');
    tileX.setAttribute('class', 'Tile_X');
    var tileX_2 = document.createElement('div');
    tileX_2.setAttribute('class', 'Tile_X');
    var tileX_3 = document.createElement('div');
    tileX_3.setAttribute('class', 'Tile_X');
    var tileX_4 = document.createElement('div');
    tileX_4.setAttribute('class', 'Tile_X');
    var tileX_5 = document.createElement('div');
    tileX_5.setAttribute('class', 'Tile_X');
    // containers for when the board is going downwards
    var colY = document.createElement('div');
    colY.setAttribute('class', 'Tile_Y');
    var colY_2 = document.createElement('div');
    colY_2.setAttribute('class', 'Tile_Y_reversed');
    var colY_3 = document.createElement('div');
    colY_3.setAttribute('class', 'Tile_Y_2');
    var colY_4 = document.createElement('div');
    colY_4.setAttribute('class', 'Tile_Y_reversed');
    // Row 1
    for(let i = 1; i <= 10; i++){
        let tile = document.createElement('div');
        let tileText = document.createElement('p');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        tileX.appendChild(tile);
        container.appendChild(tileX);
    }
    // Go down
    for( let i = 11; i < 13; i++ ){
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
    for( let i = 22; i >= 13; i-- ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        let tileText = document.createElement('p');
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        tileX_2.appendChild(tile);
        container.appendChild(tileX_2);
    }
    //Go down
    for( let i = 23; i < 24; i++ ){
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
    for(let i = 24; i <= 36; i++){
        let tile = document.createElement('div');
        let tileText = document.createElement('p');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        tileX_3.appendChild(tile);
        container.appendChild(tileX_3);
    }
    // Go Down
    for( let i = 36; i < 38; i++ ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        let tileText = document.createElement('p');
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        colY_3.appendChild(tile);
        container.appendChild(colY_3);
    }
    for( let j = 50; j >= 38; j-- ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', j);
        let tileText = document.createElement('p');
        tileText.innerHTML = j;
        tile.appendChild(tileText);
        tileX_4.appendChild(tile);
        container.appendChild(tileX_4);
    }
    for( let i = 51; i < 52; i++ ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        let tileText = document.createElement('p');
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        colY_4.appendChild(tile);
        container.appendChild(colY_4);
    }
    for(let i = 52; i <= 60; i++){
        let tile = document.createElement('div');
        let tileText = document.createElement('p');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        tileX_5.appendChild(tile);
        container.appendChild(tileX_5);
    }
}


// Player objects

function players(){
    // Player 1
    let storageKey = "Player 1";
    let imageSrc = returnPlayerImg(storageKey);
    var start = document.getElementById('1');
    var player1 = document.createElement('div');
    let playerOneCharInfo = document.getElementById('player1Char');
    player1.setAttribute('class', 'Player');
    player1.setAttribute('id', 'playerOne');
    player1.style.backgroundImage = "url('" + imageSrc + "')";
    // get data from localStorage, to see what characters are chosen.
    let player1_Character = localStorage.getItem('Player 1');
    playerOneCharInfo.innerHTML = player1_Character;
    console.log( "Player 1 : " + player1_Character);
    start.appendChild(player1);

    // Player 2
    storageKey = "Player 2";
    imageSrc = returnPlayerImg(storageKey);
    var player2 = document.createElement('div');
    let playerTwoCharInfo = document.getElementById('player2Char');
    player2.setAttribute('class', 'Player');
    player2.setAttribute('id', 'playerTwo');
    player2.style.backgroundImage = "url('" + imageSrc + "')";
    // Player 2 character from localStorage
    let player2_character = localStorage.getItem('Player 2');
    playerTwoCharInfo.innerHTML = player2_character;
    console.log(  "Player 2 : " + player2_character);
    start.appendChild(player2);
}


// Find the correct character icons
function returnPlayerImg(storageKey){
    switch(localStorage.getItem(storageKey)){
        case 'Daenerys Targaryen':
            return '../resources/characters/Daenerys Targaryen.svg';
        case 'Jon Snow':
            return '../resources/characters/Jon Snow.svg';
        case 'Tyrion Lannister':
            return '../resources/characters/Tyrion Lannister.svg';
        case 'Joffrey Baratheon':
            return '../resources/characters/Joffrey Baratheon.svg';
        case 'Petyr Baelish':
            return '../resources/characters/Petyr Baelish.svg';
        case 'Sansa Stark':
            return '../resources/characters/Sansa Stark.svg';
        case 'Arya Stark':
            return '../resources/characters/Arya Stark.svg';
        case 'Margaery Tyrell':
            return '../resources/characters/Margaery Tyrell.svg';
        case 'Cersei Lannister':
            return '../resources/characters/Cersei Lannister.svg';
        case 'Brienne of Tarth' :
            return '../resources/characters/Brienne of Tarth.svg';
    }
}

// Dice function that checks whos turn it is

function dice(){
    var Score = Math.floor(Math.random() * 5) + 1;
    let winnerModal = document.getElementById('winModal');
    let winner = document.getElementById('winPlayer');
    let gratz = document.getElementById('gz');
    console.log('-----');
    console.log('Player ' + playerTurn + " advanced " + Score + " tiles.");
    // Player 1 Controls
    if( playerTurn == 1 ){
        document.getElementById('DiceScore').innerHTML = "Player 1 rolled: " + Score;
        // Make sure players dont move past tile 60
        if( PlayerScore_1 > 60 ){
            console.log('Victory Player 1');
            document.getElementById('60').appendChild(document.getElementById('playerOne'));
            winnerModal.style.display = 'block';
            winner.innerHTML = localStorage.getItem('Player 1');
            gratz.innerHTML = "Player 1";
        // when a player lands on the last tile
        } else if( PlayerScore_1 == 60 ){
            console.log('Victory player 1');
            document.getElementById('60').appendChild(document.getElementById('playerOne'));
            winnerModal.style.display = 'block';
            winner.innerHTML = localStorage.getItem('Player 1');
            gratz.innerHTML = "Player 1";
        } else if( PlayerScore_1 < 60 ){
            for( var i = 0; i < Score && i < 60; i++ ){
                PlayerScore_1 = PlayerScore_1 + 1;
                if( PlayerScore_1 == 60 ){
                    PlayerScore_1 = 60;
                    console.log('Victory P1');
                    document.getElementById(PlayerScore_1).appendChild(document.getElementById('playerOne'));
                    winnerModal.style.display = 'block';
                    winner.innerHTML = localStorage.getItem('Player 1');
                    gratz.innerHTML = "Player 1";
                }
                document.getElementById(PlayerScore_1).appendChild(document.getElementById('playerOne'));
            }
        }
        let player = 'Player 1';
        checkTraps(player);
        playerTurn = playerTurn + 1;

    // Player 2 Controls
    } else if( playerTurn == 2 ){
        document.getElementById('DiceScore').innerHTML = "Player 2 rolled: " + Score;
        // Make sure player 2 dont move past the last tile
        if( PlayerScore_2 > 60 ){
            console.log('Victory Player 2');
            document.getElementById('60').appendChild(document.getElementById('playerTwo'));
            winnerModal.style.display = 'block';
            winner.innerHTML = localStorage.getItem('Player 2');
            gratz.innerHTML = "Player 2";
            // when player 2 is on the last tile
        } else if( PlayerScore_2 == 60 ){
            console.log('Victory Player 2');
            document.getElementById('60').appendChild(document.getElementById('playerTwo'));
            winnerModal.style.display = 'block';
            winner.innerHTML = localStorage.getItem('Player 2');
            gratz.innerHTML = "Player 2";
        } else if( PlayerScore_2 < 60 ){
            for( var j = 0; j < Score && j < 60; j++ ){
                PlayerScore_2 = PlayerScore_2 + 1;
                if( PlayerScore_2 == 60 ){
                    PlayerScore_2 = 60;
                    console.log('Victory P2');
                    document.getElementById(PlayerScore_2).appendChild(document.getElementById('playerTwo'));
                    winnerModal.style.display = 'block';
                    winner.innerHTML = localStorage.getItem('Player 2');
                    gratz.innerHTML = "Player 2";
                }
                document.getElementById(PlayerScore_2).appendChild(document.getElementById('playerTwo'));
            }
        }
        let player = 'Player 2'
        checkTraps(player);
        playerTurn = playerTurn - 1;
    }
}


// Function to add traps and check if a player landed on them

function checkTraps(player){
    // variables to make it easier to code
    console.log('check traps '+player);
    let tile;
    let character;
    let charOne = localStorage.getItem('Player 1');
    let charTwo = localStorage.getItem('Player 2');
    // trap modal
    let trapModal = document.getElementById('trapModal');
    let trappedPlayer = document.getElementById('trapPlayer');
    let trapText = document.getElementById('trapText');
    // modal variables
    let closeModal = document.getElementById('closeTrapModal');
    closeModal.onclick = function(){
        trapModal.style.display = "none";
    }
    if( player == 'Player 1' ){
        tile = PlayerScore_1;
        character = charOne;
        player = document.getElementById('playerOne');
    } else{
        tile = PlayerScore_2;
        character = charTwo;
        player = document.getElementById('playerTwo');
    }
    player.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    console.log( player);

    // Traps

    if( tile == 11 ){
        trapModal.style.display = 'block';
        trappedPlayer.innerHTML = character;
        trapText.innerHTML = " was arrested by the nights watch. Move back to the wall."
        document.getElementById('1').appendChild(player);
        if( playerTurn == 1 ){
            tile = 1;
            PlayerScore_1 = tile;
        } else if( playerTurn == 2 ){
            tile = 1;
            PlayerScore_2 = tile;
        }
    }
    if( tile == 20 ){
        trapModal.style.display = 'block';
        trappedPlayer.innerHTML = character;
        trapText.innerHTML = " was arrested by the nights watch. Move back to the wall.";
        document.getElementById('5').appendChild(player);
        if( playerTurn == 1 ){
            tile = 5;
            PlayerScore_1 = tile;
        } else if( playerTurn == 2 ){
            tile = 5;
            PlayerScore_2 = tile;
        }
    }
    if( tile == 35 ){
        trapModal.style.display = 'block';
        trappedPlayer.innerHTML = character;
        trapText.innerHTML = " was arrested by the nights watch. Move back to the wall.";
        document.getElementById('30').appendChild(player);
        if( playerTurn == 1 ){
            tile = 30;
            PlayerScore_1 = tile;
        } else if( playerTurn == 2 ){
            tile = 30;
            PlayerScore_2 = tile;
        }
    }
    if( tile == 44 ){
        trapModal.style.display = 'block';
        trappedPlayer.innerHTML = character;
        trapText.innerHTML = " was arrested by the nights watch. Move back to the wall.";
        document.getElementById('34').appendChild(player);
        if( playerTurn == 1 ){
            tile = 34;
            PlayerScore_1 = tile;
        } else if( playerTurn == 2 ){
            tile = 34;
            PlayerScore_2 = tile;
        }
    }
    if( tile == 46 ){
        trapModal.style.display = 'block';
        trappedPlayer.innerHTML = character;
        trapText.innerHTML = " was arrested by the nights watch. Move back to the wall.";
        document.getElementById('40').appendChild(player);
        if( playerTurn == 1 ){
            tile = 40;
            PlayerScore_1 = tile;
        } else if( playerTurn == 2 ){
            tile = 40;
            PlayerScore_2 = tile;
        }
    }
    if( tile == 53 ){
        trapModal.style.display = 'block';
        trappedPlayer.innerHTML = character;
        trapText.innerHTML = " was arrested by the nights watch. Move back to the wall.";
        document.getElementById('30').appendChild(player);
        if( playerTurn == 1 ){
            tile = 30;
            PlayerScore_1 = tile;
        } else if( playerTurn == 2 ){
            tile = 30;
            PlayerScore_2 = tile;
        }
    }
    if( tile == 59 ){
        trapModal.style.display = 'block';
        trappedPlayer.innerHTML = character;
        trapText.innerHTML = " was arrested by the nights watch. Move back to the wall.";
        document.getElementById('1').appendChild(player);
        if( playerTurn == 1 ){
            tile = 1;
            PlayerScore_1 = tile;
        } else if( playerTurn == 2 ){
            tile = 1;
            PlayerScore_2 = tile;
        }
    }
}


// Close the trap modal when the players click outside the modal box
window.onclick = function(event) {
    if (event.target == document.getElementById('trapModal')) {
        document.getElementById('trapModal').style.display = "none";
    }
} 

window.onload = renderGame();