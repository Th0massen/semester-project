

function renderPage(){
    load();
}

// creates and display winning character
function load(){
    let storageKey = 'Winner';
    let winnerImage = findCharacterImage(storageKey);
    let displayWinner = document.getElementById('character');
    let winnerText = document.getElementById('winnerText');
    let winContainer = document.createElement('div');
    winContainer.setAttribute('id', 'winner');
    // Name of the character
    let winName = document.createElement('h1');
    winName.innerHTML = localStorage.getItem('Winner');
    // Character image
    let winImg = document.createElement('div');
    winImg.setAttribute('id', 'winnerImg');
    winImg.style.backgroundImage = "url('" + winnerImage + "')";
    // Winner text
    let characterName = winName.innerHTML
    let winnerTitle = findCharacterTitle(characterName);
    winnerText.innerHTML = 'All hail the ruler of Westeros, ' + '<br>' +  winnerTitle + " " + winName.innerHTML;
    // Append
    //winContainer.appendChild(winName);
    winContainer.appendChild(winImg);
    displayWinner.appendChild(winContainer);
}   

// Finds and displays the correct character portrait
function findCharacterImage(storageKey){ 
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

// finds the correct title
function findCharacterTitle(characterName){
    switch(characterName){
        // Queen or lady title
        case 'Daenerys Targaryen':
        case 'Sansa Stark':
        case 'Arya Stark':
        case 'Margaery Tyrell':
        case 'Cersei Lannister':
        case 'Brienne of Tarth' :
            return 'Queen';
        // King or lord title
        case 'Jon Snow':
        case 'Tyrion Lannister':
        case 'Joffrey Baratheon':
        case 'Petyr Baelish':
            return 'King';
    }
}

// removes stored data and redirects to landing page
function newGame(){
    localStorage.removeItem('Winner');
    window.location.replace('../index.html');
}

window.onload = renderPage();