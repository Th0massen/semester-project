

function renderPage(){
    load();
}


function load(){
    let storageKey = 'Winner';
    let winnerImage = findCharacterImage(storageKey);
    let displayWinner = document.getElementById('character');
    let winContainer = document.createElement('div');
    winContainer.setAttribute('id', 'winner');
    // Name of the character
    let winName = document.createElement('h1');
    winName.innerHTML = localStorage.getItem('Winner');
    // Character image
    let winImg = document.createElement('div');
    winImg.setAttribute('id', 'winnerImg');
    winImg.style.backgroundImage = "url('" + winnerImage + "')";
    // Append
    winContainer.appendChild(winName);
    winContainer.appendChild(winImg);
    displayWinner.appendChild(winContainer);
}   


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


window.onload = renderPage();