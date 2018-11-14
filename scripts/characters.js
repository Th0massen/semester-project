
// Retrieve data from the api
fetch('https://anapioficeandfire.com/api/characters')
    .then(result => result.json())
    .then((result) => { 
        Characters(result); 
    })
    .catch(err => console.log(err))

// Function to handle recieved data
function Characters(result){
    let container = document.getElementById("container");
    let characters = document.createElement("div");
    characters.setAttribute('class', '[ characters ]');
    // Create the characters
    for(let i = 0; i < result.length; i++){
        let char = document.createElement('div');
        //char.setAttribute('class', '[ '+ result[i].aliases +' ]' + '[ char ]' );
        char.setAttribute('class', '[ char ]'+'[ ' + result[i].aliases + ' ]');
        char.setAttribute('id', result[i].aliases);
        // Character info
        let char_title = document.createElement('h2');
        char_title.setAttribute('id', result[i].aliases + '_title');
        char_title.innerHTML = result[i].aliases;
        let char_gender = document.createElement('p');
        char_gender.setAttribute('id', result[i].aliases + '_info');
        char_gender.innerHTML = result[i].gender;
        // Add player tokens.
        char_img = document.createElement('img');
        char_img.setAttribute('class', 'token')
        char_img.src="https://via.placeholder.com/150";
        // Add button.
        char_button = document.createElement('a');
        char_button.setAttribute('class', "[ selectBtn ]");
        char_button.setAttribute('id', result[i].aliases + 'button')
        char_button.type = "button";
        char_button.innerHTML = "Play as " + result[i].aliases;
        char_button.href = "game.html";
        // Append everything
        char.appendChild(char_img);
        char.appendChild(char_title);
        char.appendChild(char_gender);
        char.appendChild(char_button);
        characters.appendChild(char);
    }
    container.appendChild(characters);
    console.log('Please select a Character to continue.');
};

// Add event listener on document body to register user actions
document.body.addEventListener( 'click', function(event){ 
    switch(event = event.target.id){
        case 'The Daughter of the Dusk':
            clearButtons();
            selectHero(event);
            break;
        case 'Hodor':
            clearButtons();
            selectHero(event);
            break;
        case 'Lamprey':
            clearButtons();
            selectHero(event);
            break;  
        case 'The Merling Queen':
            clearButtons();
            selectHero(event);
            break;
        case 'Old Crackbones':
            clearButtons();
            selectHero(event);
            break;  
        case 'The Poetess':
            clearButtons();
            selectHero(event);
            break;  
        case 'Porridge':
            clearButtons();
            selectHero(event);
            break;  
        case 'Quickfinger':
            clearButtons();
            selectHero(event);
            break;
        case "the Sailor's Wife":
            clearButtons();
            selectHero(event);
            break; 
        case 'The Veiled Lady':
            clearButtons();
            selectHero(event);
            break;     
    }
});

// When a user clicks on a hero, remove the style of the other heroes
function clearButtons(){
    let el = document.querySelectorAll('.char');
    for(let i = 0; i < el.length; i++){
        el[i].style.border = "none";
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
    hero[0].style.border = '5px solid green';
    heroButton.style.display = 'block';
}