
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
    characters.setAttribute('id', 'characters');
    // Create the characters
    for(let i = 0; i < result.length; i++){
        let char = document.createElement('div');
        char.setAttribute('class', '[ char ]'+'[ ' + result[i].name + ' ]');
        char.setAttribute('id', result[i].name);
        // Character info
        let char_name = document.createElement('h2');
        char_name.setAttribute('id', result[i].name + '_title');
        char_name.innerHTML = result[i].name;
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
        char.appendChild(char_button);
        characters.appendChild(char);
    }
    container.appendChild(characters);
    console.log('Please select a Character to continue.')
};

// Add event listener to container to register user actions
let selection = setTimeout(function(){
    let characterContainer = document.getElementById('characters');
    characterContainer.addEventListener( 'click', function(event){  //event = event.target.parentNode.id
        console.log(event.target.id);
        switch(true) {
            case event.target.id == 'Daenerys Targaryen' || event.target.parentNode.id == 'Daenerys Targaryen':
                clearButtons();
                event = 'Daenerys Targaryen';
                selectHero(event);
                break;
            case event.target.id == 'Jon Snow' || event.target.parentNode.id == 'Jon Snow':
                clearButtons();
                event = 'Jon Snow'
                selectHero(event);
                break;
            case event.target.id == 'Tyrion Lannister' || event.target.parentNode.id == 'Tyrion Lannister':
                clearButtons();
                event = 'Tyrion Lannister';
                selectHero(event);
                break;  
            case event.target.id == 'Joffrey Baratheon' || event.target.parentNode.id == 'Joffrey Baratheon':
                clearButtons();
                event = 'Joffrey Baratheon'
                selectHero(event);
                break;
            case event.target.id == 'Petyr Baelish' || event.target.parentNode.id == 'Petyr Baelish':
                clearButtons();
                event = 'Petyr Baelish';
                selectHero(event);
                break;  
            case event.target.id == 'Sansa Stark' || event.target.parentNode.id == 'Sansa Stark':
                clearButtons();
                event = 'Sansa Stark';
                selectHero(event);
                break;  
            case event.target.id == 'Arya Stark' || event.target.parentNode.id == 'Arya Stark':
                clearButtons();
                event = 'Arya Stark';
                selectHero(event);
                break;  
            case event.target.id == 'Margaery Tyrell' || event.target.parentNode.id == 'Margaery Tyrell':
                clearButtons();
                event = 'Margaery Tyrell';
                selectHero(event);
                break;
            case event.target.id == 'Cersei Lannister' || event.target.parentNode.id == "Cersei Lannister":
                clearButtons();
                event = 'Cersei Lannister';
                selectHero(event);
                break; 
            case event.target.id == 'Brienne of Tarth' || event.target.parentNode.id == 'Brienne of Tarth':
                clearButtons();
                event = 'Brienne of Tarth'
                selectHero(event);
                break;     
        }
    });
}, 500)
selection;

// When a user clicks on a hero, remove the style and hide the button for the other characters
function clearButtons(){
    let el = document.querySelectorAll('.char');
    for(let i = 0; i < el.length; i++){
        el[i].style.border = "1px solid black";
        el[i].style.boxShadow = "none";
    }
    let btn = document.querySelectorAll('.selectBtn');
    for(let j = 0; j < btn.length; j++ ){
        btn[j].style.display = 'none';
    }
}

// When a user clicks on a character, give it a border to highlight selected hero, and display button to contine.
function selectHero(event){
    console.log("User selected: " + event);
    let hero = document.getElementsByClassName(event); 
    let heroButton = document.getElementById(event + 'button');
    //hero[0].style.border = '5px solid green';
    heroButton.style.display = 'block';
    // When the user clicks on a character button, check if player 1 or 2 has selected.
    let playerOne = document.getElementById('playerOneChar');
    let playerTwo = document.getElementById('playerTwoChar');
    // Card borders 
    if(playerOne.value == '0'){
        hero[0].style.boxShadow = "0 0 20px blue";
        hero[0].style.border = "3px solid blue";
    } else if(playerTwo.value == '0'){
        hero[0].style.border = "3px solid green";
        hero[0].style.boxShadow = "0 0 20px green";
    }
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
            //set a border to show picked characters
            hero[0].style.border = "3px solid blue";
            hero[0].className = "playerCharacter";
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
            // set a border to show picked characters
            hero[0].style.border = "3px solid green";
            hero[0].className = "playerCharacter";      
            return playerTwo;
        }
    }
}
