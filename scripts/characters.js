
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
        var char_title = document.createElement('h2');
        char_title.innerHTML = result[i].aliases;
        var char_gender = document.createElement('p');
        char_gender.innerHTML = result[i].gender;
        // Append everything
        char.appendChild(char_title);
        char.appendChild(char_gender);
        characters.appendChild(char);
    }
    container.appendChild(characters);
}