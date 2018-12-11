
// Global variables

var PlayerScore_1 = 1;
var PlayerScore_2 = 1;
var playerTurn = 1;

// Set up container

var container = document.getElementById('GameContainer');
    container.style.border = "1px solid black";
    container.style.display = "block";
    //container.style.background = "white";
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
    // Row Downwards
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
    //Row Downwards
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
    // Row Downwards
    for( let i = 37; i < 39; i++ ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        let tileText = document.createElement('p');
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        colY_3.appendChild(tile);
        container.appendChild(colY_3);
    }
    for( let j = 51; j >= 39; j-- ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', j);
        let tileText = document.createElement('p');
        tileText.innerHTML = j;
        tile.appendChild(tileText);
        tileX_4.appendChild(tile);
        container.appendChild(tileX_4);
    }
    for( let i = 52; i < 54; i++ ){
        let tile = document.createElement('div');
        tile.setAttribute('class', 'Tile');
        tile.setAttribute('id', i);
        let tileText = document.createElement('p');
        tileText.innerHTML = i;
        tile.appendChild(tileText);
        colY_4.appendChild(tile);
        container.appendChild(colY_4);
    }
    for(let i = 54; i <= 65; i++){
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
    let imageSrc = replayerTurnImg(storageKey);
    var start = document.getElementById('1');
    var player1 = document.createElement('div');
    player1.setAttribute('class', 'Player');
    player1.setAttribute('id', 'playerOne');
    player1.style.backgroundImage = "url('" + imageSrc + "')";
    // get data from localStorage, to see what characters are chosen.
    let player1_Character = localStorage.getItem('Player 1');
    console.log( "Player 1 : " + player1_Character);
    // add image and info on the side of the game board
    let playerOneCharInfo = document.getElementById('player1Char');
    let playerOneImg = document.getElementById('playerOneImg');
    playerOneCharInfo.innerHTML = player1_Character;
    playerOneImg.style.backgroundImage = "url('" + imageSrc + "')";
    playerOneImg.style.height = '90px';
    start.appendChild(player1);

    // Player 2
    storageKey = "Player 2";
    imageSrc = replayerTurnImg(storageKey);
    var player2 = document.createElement('div');
    player2.setAttribute('class', 'Player');
    player2.setAttribute('id', 'playerTwo');
    player2.style.backgroundImage = "url('" + imageSrc + "')";
    // Player 2 character from localStorage
    let player2_character = localStorage.getItem('Player 2');
    console.log(  "Player 2 : " + player2_character);
    // add image and info on the side of the game board
    let playerTwoCharInfo = document.getElementById('player2Char');
    let playerTwoImg = document.getElementById('playerTwoImg');
    playerTwoCharInfo.innerHTML = player2_character;
    playerTwoImg.style.backgroundImage = "url('" + imageSrc + "')";
    playerOneImg.style.height = '90px';
    start.appendChild(player2);
}


// Find the correct character icons
function replayerTurnImg(storageKey){
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
    var Score = Math.floor(Math.random() * 6) + 1;
    let updatePlayerTurn = document.getElementById('playersturn');
    // Hide the roll dice button until the game is updated
    let diceButton = document.getElementById('TrowDiceButton');
    let hiddenDiceButton = document.getElementById('HiddenDiceButton');
    diceButton.style.display = "none";
    hiddenDiceButton.style.display = "block";
    setTimeout(function(){
        diceButton.style.display = "block";
        hiddenDiceButton.style.display = "none";
    }, 3200);
    // add dice image after each trow
    displayDice(Score);
    console.log('-----');
    console.log('Player ' + playerTurn + " advanced " + Score + " tiles.");
    
    // Player 1
    if( playerTurn == 1 ){
        document.getElementById('DiceScore').innerHTML = "Player 1 rolled: " + Score;
        // Move camera to player 
        let player = document.getElementById('playerOne');
        player.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
        if( PlayerScore_1 < 65 ){
            for( var i = 1; i <= Score && i < 65; i++ ){
                // timeout function to make the player move one tile at a time
                setTimeout(function(){
                    PlayerScore_1 = PlayerScore_1 + 1;
                    document.getElementById(PlayerScore_1).appendChild(document.getElementById('playerOne'));
                }, 500 * i )
            }
            // time delay so players are done moving when the check happens
            setTimeout(function(){
                let player = 'Player 1';
                checkTile(player);
                checkWin(player);
            }, 3200);
        }
        // if player does not trow a 6
        if( Score < 6 ){
            playerTurn = playerTurn + 1;
            setTimeout(function(){
                updatePlayerTurn.innerHTML = " " + 2;
            }, 3200);
        }
    } 

    // Player 2 Controls
    else if( playerTurn == 2 ){
        document.getElementById('DiceScore').innerHTML = "Player 2 rolled: " + Score;
        // Move camera to player 
        let player = document.getElementById('playerTwo');
        player.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
        if( PlayerScore_2 < 65 ){
            for( let i = 0; i < Score && i < 65; i++ ){
                setTimeout(function(){
                    PlayerScore_2 = PlayerScore_2 + 1;
                    document.getElementById(PlayerScore_2).appendChild(document.getElementById('playerTwo'));
                }, 500 * i )
            }
            // time delay so players are done moving when the check happens
            setTimeout(function(){
                let player = 'Player 2';
                checkTile(player);
                checkWin(player);
            }, 3200);
        }
        // if player does not trow a 6
        if( Score < 6 ){
            playerTurn = playerTurn - 1;
            setTimeout(function(){
                updatePlayerTurn.innerHTML = " " + 1;
            }, 3200);
        }
    }
}


// Function to check for traps or victory

function checkTile(player){
    // Player variables
    let playerTile;
    let character;
    let players;
    let charOne = localStorage.getItem('Player 1');
    let charTwo = localStorage.getItem('Player 2');
    
    // Check player turn
    if( player == 'Player 1' ){
        playerTile = PlayerScore_1;
        players = document.getElementById('playerOne');
        character = charOne;
    } else if( player == 'Player 2' ){
        playerTile = PlayerScore_2;
        players = document.getElementById('playerTwo');
        character = charTwo;
    }
    // trap modal variables
    let trapModal = document.getElementById('trapModal');
    let trappedPlayer = document.getElementById('trapPlayer');
    let trapText = document.getElementById('trapText');

    // check for traps or winner
    switch(playerTile){
        // trap
        case 13:
            trapModal.style.display = 'block';
            trappedPlayer.innerHTML = character;
            trapText.innerHTML = " was arrested by the Nights Watch, Move back to the Wall."
            if( player == 'Player 1' ){
                playerTile = 1;
                PlayerScore_1 = 1;
                document.getElementById('1').appendChild(players);
            } else if( player == 'Player 2' ){
                playerTile = 1;
                PlayerScore_2 = 1;
                document.getElementById('1').appendChild(players);
            }
            return PlayerScore_1, PlayerScore_2;
        // trap
        case 23:
            trapModal.style.display = 'block';
            trappedPlayer.innerHTML = character;
            trapText.innerHTML = " was ambushed on the way to the Iron Islands, move back to Winterfell."
            if( player == 'Player 1' ){
                playerTile = 10;
                PlayerScore_1 = 10;
                document.getElementById('10').appendChild(players);
            } else if( player == 'Player 2' ){
                playerTile = 10;
                PlayerScore_2 = 10;
                document.getElementById('10').appendChild(players);
            }
            return PlayerScore_1, PlayerScore_2;
        // trap
        case 31:
            trapModal.style.display = 'block';
            trappedPlayer.innerHTML = character;
            trapText.innerHTML = " was denied access to Riverun, Move back 5 tiles."
            if( player == 'Player 1' ){
                playerTile = 26;
                PlayerScore_1 = 26;
                document.getElementById('26').appendChild(players);
            } else if( player == 'Player 2' ){
                playerTile = 26;
                PlayerScore_2 = 26;
                document.getElementById('26').appendChild(players);
            }
            return PlayerScore_1, PlayerScore_2;
        // trap
        case 40:
            trapModal.style.display = 'block';
            trappedPlayer.innerHTML = character;
            trapText.innerHTML = " was burned by a dragon, Escape to Riverrun."
            if( player == 'Player 1' ){
                playerTile = 32;
                PlayerScore_1 = 32;
                document.getElementById('32').appendChild(players);
            } else if( player == 'Player 2' ){
                playerTile = 32;
                PlayerScore_2 = 32;
                document.getElementById('32').appendChild(players);
            }
            return PlayerScore_1, PlayerScore_2;
        // trap
        case 47:
            trapModal.style.display = 'block';
            trappedPlayer.innerHTML = character;
            trapText.innerHTML = " successfully attacked Casterly Rock, Granted safe passage to The Shield Islands"
            if( player == 'Player 1' ){
                playerTile = 54;
                PlayerScore_1 = 54;
                document.getElementById('54').appendChild(players);
            } else if( player == 'Player 2' ){
                playerTile = 54;
                PlayerScore_2 = 54;
                document.getElementById('54').appendChild(players);
            }
            return PlayerScore_1, PlayerScore_2;
        // trap
        case 60:
            trapModal.style.display = 'block';
            trappedPlayer.innerHTML = character;
            trapText.innerHTML = " was defeated in the battle for Highgarden, and sent back to The Wall."
            if( player == 'Player 1' ){
                playerTile = 1;
                PlayerScore_1 = 1;
                document.getElementById('1').appendChild(players);
            } else if( player == 'Player 2' ){
                playerTile = 1;
                PlayerScore_2 = 1;
                document.getElementById('1').appendChild(players);
            }
            return PlayerScore_1, PlayerScore_2;
        // trap
        case 64:
            trapModal.style.display = 'block';
            trappedPlayer.innerHTML = character;
            trapText.innerHTML = " was kicked out of Kings Landing, return to Highgarden."
            if( player == 'Player 1' ){
                playerTile = 59;
                PlayerScore_1 = 59;
                document.getElementById('59').appendChild(players);
            } else if( player == 'Player 2' ){
                playerTile = 59;
                PlayerScore_2 = 59;
                document.getElementById('59').appendChild(players);
            }
            return PlayerScore_1, PlayerScore_2;
        // Goal
        case 65:
            checkWin(player);
    }
}

// check if a player has moved past the last tile

function checkWin(player){
    // winner modal variables
    let winnerModal = document.getElementById('winModal');
    let winner = document.getElementById('winPlayer');
    let gratz = document.getElementById('gz');
    let victory;
    // Player 1
    if( player == "Player 1" ){
        if( PlayerScore_1 >= 65 ){
            PlayerScore_1 = 65;
            winnerModal.style.display = 'block';
            document.getElementById('65').appendChild(document.getElementById('playerOne'));
            winner.innerHTML = localStorage.getItem('Player 1');
            gratz.innerHTML = "Player 1";
            // add the winner to local storage
            victory = localStorage.getItem('Player 1');
            console.log('win' + victory);             
            localStorage.setItem("Winner", victory);
        }
    }
    // Player 2
    else if( player == 'Player 2' ){
        if( PlayerScore_2 >= 65 ){
            PlayerScore_2 = 65;
            winnerModal.style.display = 'block';
            document.getElementById('65').appendChild(document.getElementById('playerTwo'));
            winner.innerHTML = localStorage.getItem('Player 2');
            gratz.innerHTML = "Player 2";
             // add the winner to local storage
             victory = localStorage.getItem('Player 2');
             console.log('win' + victory);
             localStorage.setItem("Winner", victory);
        }
    }
}

// remove players from local storage and redirect to the last page
function endGameFunction(){
    localStorage.removeItem('Player 1');
    localStorage.removeItem('Player 2');
    window.location.replace('../gamefiles/endgame.html');
}

// Function to display dice icons on the html site
function displayDice(Score){
    switch(Score){
        case 1:
            document.getElementById("Dice Image").className = "fas fa-dice-one";
            break;
        case 2:
            document.getElementById("Dice Image").className = "fas fa-dice-two";
            break;
        case 3: 
            document.getElementById("Dice Image").className = "fas fa-dice-three";
            break;
        case 4: 
            document.getElementById("Dice Image").className = "fas fa-dice-four";
            break;
        case 5: 
            document.getElementById("Dice Image").className = "fas fa-dice-five";
            break;
        case 6: 
            document.getElementById("Dice Image").className = "fas fa-dice-six";
            break;
    };
}

// Close the trap modal when the players click outside the modal box
window.onclick = function(event) {
    if (event.target == document.getElementById('trapModal')) {
        document.getElementById('trapModal').style.display = "none";
    }
} 

function openSidebar(){
    let sidemenu = document.getElementById('GameInfo');
    let menuBtn = document.getElementById('openSidebar');
    sidemenu.style.visibility = 'visible';
    menuBtn.style.display = 'none';
}

function closeSideBar(){
    let sidemenu = document.getElementById('GameInfo');
    let menuBtn = document.getElementById('openSidebar');
    sidemenu.style.visibility = 'hidden'
    menuBtn.style.display = 'block';
}

window.onload = renderGame();