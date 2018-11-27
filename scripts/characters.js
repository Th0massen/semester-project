
var api = [ 
    'https://anapioficeandfire.com/api/characters/1303/',
    'https://anapioficeandfire.com/api/characters/583/',
    'https://anapioficeandfire.com/api/characters/1052/',
    'https://anapioficeandfire.com/api/characters/565/',
    'https://anapioficeandfire.com/api/characters/823/',
    'https://anapioficeandfire.com/api/characters/957/',
    'https://anapioficeandfire.com/api/characters/148/',
    'https://anapioficeandfire.com/api/characters/16/',
    'https://anapioficeandfire.com/api/characters/238/',
    'https://anapioficeandfire.com/api/characters/216/',
];

Promise.all( api.map ( url =>
    fetch( url )
    .then( response => response.json())
))
    .then(result => {
        console.log(result);
        Characters(result);
    }
)
.catch(err => console.log(err))


// Function to handle recieved data

function Characters(result){
    let container = document.getElementById("container");
    let characters = document.createElement("div");
    characters.setAttribute('class', '[ characters ]');
    // Create the characters
    for(let i = 0; i < result.length; i++){
        let char = document.createElement('div');
        char.setAttribute('class', '[ char ]'+'[ ' + result[i].name + ' ]');
        char.setAttribute('id', result[i].name);
        // Character info
        let char_name = document.createElement('h2');
        char_name.setAttribute('id', result[i].name + '_title');
        char_name.innerHTML = result[i].name;
        /*
        let char_title = document.createElement('div');
        char_title.setAttribute('id', result[i].name + '_text');
        char_title.setAttribute('class', 'charTitle');

        for( var j = 0; j < result[i].titles.length; j++ ){
            console.log(result[i].titles[j]);
            char_title_text = document.createElement('p');
            char_title_text.innerHTML = result[i].titles[j];
            char_title.appendChild(char_title_text);
        }
        */
        let char_gender = document.createElement('p');
        char_gender.setAttribute('id', result[i].name + '_info');
        char_gender.innerHTML = result[i].gender;
        // Add player tokens.
        char_img = document.createElement('img');
        char_img.setAttribute('class', 'token')
        char_img.src = "../resources/characters/" + result[i].name + ".svg";
        // Add button.
        char_button = document.createElement('button');
        char_button.setAttribute('class', "[ selectBtn ]");
        char_button.setAttribute('id', result[i].name + 'button')
        char_button.type = "button";
        char_button.innerHTML = "Play as " + result[i].name;
        // Append everything
        char.appendChild(char_img);
        char.appendChild(char_name);
        //char.appendChild(char_title);
        char.appendChild(char_gender);
        char.appendChild(char_button);
        characters.appendChild(char);
    }
    container.appendChild(characters);
    console.log('Please select a Character to continue.')
};

// Add event listener on document body to register user actions
document.body.addEventListener( 'click', function(event){ 
    switch(event = event.target.id){
        case 'Daenerys Targaryen':
            clearButtons();
            selectHero(event);
            break;
        case 'Jon Snow':
            clearButtons();
            selectHero(event);
            break;
        case 'Tyrion Lannister':
            clearButtons();
            selectHero(event);
            break;  
        case 'Joffrey Baratheon':
            clearButtons();
            selectHero(event);
            break;
        case 'Petyr Baelish':
            clearButtons();
            selectHero(event);
            break;  
        case 'Sansa Stark':
            clearButtons();
            selectHero(event);
            break;  
        case 'Arya Stark':
            clearButtons();
            selectHero(event);
            break;  
        case 'Margaery Tyrell':
            clearButtons();
            selectHero(event);
            break;
        case "Cersei Lannister":
            clearButtons();
            selectHero(event);
            break; 
        case 'Brienne of Tarth':
            clearButtons();
            selectHero(event);
            break;     
    }
});

// When a user clicks on a hero, remove the style and hide the button for the other characters
function clearButtons(){
    let el = document.querySelectorAll('.char');
    for(let i = 0; i < el.length; i++){
        el[i].style.border = "none";
    }
    let btn = document.querySelectorAll('.selectBtn');
    for(let j = 0; j < btn.length; j++ ){
        btn[j].style.display = 'none';
    }
    /*
    let text = document.querySelectorAll('.charTitle');
    for(let k = 0; k < text.length; k++){
        text[k].style.display = 'none';
    }*/
}

// When a user clicks on a character, give it a border to highlight selected hero, and display button to contine.
function selectHero(event){
    console.log("User selected: " + event);
    let hero = document.getElementsByClassName(event); 
    let heroButton = document.getElementById(event + 'button');
    hero[0].style.border = '5px solid green';
    heroButton.style.display = 'block';
    //document.getElementById(event + '_text').style.display = "block";
    // When the user clicks on a character button, check if player 1 or 2 has selected.
    let playerOne = document.getElementById('playerOneChar');
    let playerTwo = document.getElementById('playerTwoChar');
    heroButton.onclick = function(){
        // CHeck if player 1 has chosen a character
        if(playerOne.value == '0'){
            playerOne.value = '1';
            playerOne.innerHTML = "Player 1: " + event;
            playerOne.style.display = 'inline-block';
            playerTwo.style.display = 'inline-block';
            console.log('Player 1 is playing as: ' + event);
            // Store the character id in localstorage.
            localStorage.setItem('Player 1', event);
            window.scrollTo(0, 0);
            clearButtons();
            return playerOne
            // Check if player 2 has chose a character
        } else if(playerTwo.value == '0'){
            playerTwo.value = '1';
            playerTwo.innerHTML = 'Player 2: ' + event;
            console.log('Player 2 is playing as: ' + event);
            document.getElementById('playerButton').style.display = 'block';
            // Store the character id in localstorage.
            localStorage.setItem('Player 2', event);
            window.scrollTo(0, 0);   
            clearButtons();        
            return playerTwo;
        }
    }
}
