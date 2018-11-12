
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
    var container = document.getElementById("container");
    var characters = document.createElement("div");
    characters.setAttribute('class', '[ characters ]');
    // Create the characters
    for(var i = 0; i < result.length; i++){
        console.log(result[i]);
        var char = document.createElement('div');
        char.setAttribute('class', '[ char ]');
        char.setAttribute('id', result[i].aliases);
        // Character info
        var char_title = document.createElement('h2');
        char_title.innerHTML = result[i].aliases;
        var char_gender = document.createElement('p');
        char_gender.innerHTML = result[i].gender;
        // Add player tokens.
        char_img = document.createElement('img');
        char_img.src="https://via.placeholder.com/150";
        // Add button.
        char_button = document.createElement('input');
        char_button.setAttribute('class', "selectBtn");
        char_button.setAttribute('id', i);
        char_button.type = "button";
        char_button.value = "Play as " + result[i].aliases;
        // Append everything
        char.appendChild(char_img);
        char.appendChild(char_title);
        char.appendChild(char_gender);
        char.appendChild(char_button);
        characters.appendChild(char);
    }
    container.appendChild(characters);
};

/*
var buttons = document.getElementsByClassName('selectBtn');
for(var i = 0; i < selectBtn.length; i++){
    buttons.addEventListener('click', selectHero());
}

function selectHero(){
    console.log("hello");
}
*/