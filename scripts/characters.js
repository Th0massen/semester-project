
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
        char.setAttribute('class', 'char');
        char.setAttribute('id', result[i].aliases);
        // Character info
        let char_title = document.createElement('h2');
        char_title.innerHTML = result[i].aliases;
        let char_gender = document.createElement('p');
        char_gender.innerHTML = result[i].gender;
        // Add player tokens.
        char_img = document.createElement('img');
        char_img.setAttribute('class', 'token')
        char_img.src="https://via.placeholder.com/150";
        // Add button.
        char_button = document.createElement('input');
        char_button.setAttribute('class', "[ selectBtn ]");
        char_button.setAttribute('id', "button"+i);
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
// since button[i] became the last element in the list, the previous got overwritten. returning to this section later... 

document.body.addEventListener( 'click', function(event){
    let element = event.srcElement; 
    if(element.id == 'button0'){
        console.log(element.value);
        clearButtons();
        document.getElementById('The Daughter of the Dusk').style.border = "5px solid green";
    } else if(element.id == 'button1'){
        console.log(element.value);
        clearButtons();
        document.getElementById('Hodor').style.border = "5px solid green";
    } else if(element.id == 'button2'){
        console.log(element.value);
        clearButtons();
        document.getElementById('Lamprey').style.border = "5px solid green";
    } else if(element.id == 'button3'){
        console.log(element.value);
        clearButtons();
        document.getElementById('The Merling Queen').style.border = "5px solid green";
    } else if(element.id == 'button4'){
        console.log(element.value);
        clearButtons();
        document.getElementById('Old Crackbones').style.border = "5px solid green";
    } else if(element.id == 'button5'){
        console.log(element.value);
        clearButtons();
        document.getElementById('The Poetess').style.border = "5px solid green";
    } else if(element.id == 'button6'){
        console.log(element.value);
        clearButtons();
        document.getElementById('Porridge').style.border = "5px solid green";
    } else if(element.id == 'button7'){
        console.log(element.value);
        clearButtons();
        document.getElementById('Quickfinger').style.border = "5px solid green";
    } else if(element.id == 'button8'){
        console.log(element.value);
        clearButtons();
        document.getElementById("the Sailor's Wife").style.border = "5px solid green";
    } else if(element.id == 'button9'){
        console.log(element.value);
        clearButtons();
        document.getElementById('The Veiled Lady').style.border = "5px solid green";
    } 
});



// When a user clicks a button, remove the style of all other buttons
function clearButtons(){
    let el = document.querySelectorAll('.char');
    console.log(el);
    for(let i = 0; i < el.length; i++){
        el[i].style.border = "none";
    }
}

