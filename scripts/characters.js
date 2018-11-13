
// Retrieve data from the api
fetch('https://anapioficeandfire.com/api/characters')
    .then(result => result.json())
    .then((result) => { 
        console.log(result);
        Characters(result); 
    })
    .catch(err => console.log(err))

// Function to handle recieved data
function Characters(result){
    console.log("Creating Characters...");
    let container = document.getElementById("container");
    let characters = document.createElement("div");
    characters.setAttribute('class', '[ characters ]');
    // Create the characters
    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
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
        char_button = document.createElement('input');
        char_button.setAttribute('class', "[ selectBtn ]");
        //char_button.setAttribute('id', i);
        char_button.type = "button";
        char_button.value = "Play as " + result[i].aliases;
        var buttonData = result[i].aliases;
        // Append everything
        char.appendChild(char_img);
        char.appendChild(char_title);
        char.appendChild(char_gender);
        char.appendChild(char_button);
        characters.appendChild(char);
    }
    container.appendChild(characters);
};

// This is probably not a good way to handle this, but i wasn't able to get event listeners to function properly on dynamically created elements
// since button[i] became the last element in the list, the previous got overwritten.
// so i added a listener to the body, and checks if the user clicked on any of the characters :)

document.body.addEventListener( 'click', function(event){ 
    switch(event = event.srcElement.id){
        case 'The Daughter of the Dusk':
        case 'The Daughter of the Dusk_title':
        case 'The Daughter of the Dusk_info':
            clearButtons();
            selectHero(event);
            break;
        case 'Hodor':
        case 'Hodor_title':
        case 'Hodor_info':
            clearButtons();
            selectHero(event);
            break;
        case 'Lamprey':
        case 'Lamprey_title':
        case 'Lamprey_info':
            clearButtons();
            selectHero(event);
            break;  
        case 'The Merling Queen':
        case 'The Merling Queen_title':
        case 'The Merling Queen_info':
            clearButtons();
            selectHero(event);
            break;
        case 'Old Crackbones':
        case 'Old Crackbones_title':
        case 'Old Crackbones_info':
            clearButtons();
            selectHero(event);
            break;  
        case 'The Poetess':
        case 'The Poetess_title':
        case 'The Poetess_info':
            clearButtons();
            selectHero(event);
            break;  
        case 'Porridge':
        case 'Porridge_title':
        case 'Porridge_info':
            clearButtons();
            selectHero(event);
            break;  
        case 'Quickfinger':
        case 'Quickfinger_title':
        case 'Quickfinger_info':
            clearButtons();
            selectHero(event);
            break;
        case "the Sailor's Wife":
        case "the Sailor's Wife_title":
        case "the Sailor's Wife_info":
            clearButtons();
            selectHero(event);
            break; 
        case 'The Veiled Lady':
        case 'The Veiled Lady_title':
        case 'The Veiled Lady_info':
            clearButtons();
            selectHero(event);
            break;     
    }
});


// When a user clicks a button, remove the style of all other buttons
function clearButtons(){
    let el = document.querySelectorAll('.char');
    for(let i = 0; i < el.length; i++){
        el[i].style.border = "none";
    }
}

function selectHero(event){
    console.log("play as: " + event + '?');
    let hero = document.getElementsByClassName(event); 
    console.log(hero);
    hero[0].style.border = '3px solid green';
}