
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
        char_button.setAttribute('id', "button"+i);
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

// This is probably not a good way to handle this, but i wasn't able to get event listeners to function properly on dynamically created elements
// since button[i] became the last element in the list, the previous got overwritten. returning to this section later... 

document.body.addEventListener( 'click', function(event){
    if(event.srcElement.id == 'button0'){
      console.log(event.srcElement.value);
      // do shit
    } else if(event.srcElement.id == 'button1'){
        console.log(event.srcElement.value);
        //do shit
    } else if(event.srcElement.id == 'button2'){
        console.log(event.srcElement.value);
        //do shit
    } else if(event.srcElement.id == 'button3'){
        console.log(event.srcElement.value);
        //do shit
    } else if(event.srcElement.id == 'button4'){
        console.log(event.srcElement.value);
        //do shit
    } else if(event.srcElement.id == 'button5'){
        console.log(event.srcElement.value);
        //do shit
    } else if(event.srcElement.id == 'button6'){
        console.log(event.srcElement.value);
        //do shit
    } else if(event.srcElement.id == 'button7'){
        console.log(event.srcElement.value);
        //do shit
    } else if(event.srcElement.id == 'button8'){
        console.log(event.srcElement.value);
        //do shit
    } else if(event.srcElement.id == 'button9'){
        console.log(event.srcElement.value);
        //do shit
    } 
});

