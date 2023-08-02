/* @TODO Get References */
const pokemonInfoDiv = document.getElementById("pokemon_info")
const screenImage = document.querySelector("img");
const submitButton = document.getElementById("Submit-Button");
const pokemonDropDown = document.getElementById("pokemon_dropdown")
 
const changePokemon = ("click", e => {
e.preventDefault();
const userChoice = pokemonDropDown.value;
console.log(userChoice)
screenImage.src = "images/" + userChoice.toLowerCase() + ".png";

pokemonInfoDiv.innerHTML = "It's" + userChoice + "!"
});
/* @TODO Event Handler */
pokemonDropDown.addEventListener("change",changePokemon);
/*  
    try updating when button is clicked vs when
    dropdown value changes with
    menu.onchange = 
*/


submitButton.addEventListener("click",() => {
   
    changePokemon();
});
// prevent the page from reloading

// capture userChoice

// show Pokemon picture based on userChoice

// change src of screenImage

// change innerHTML of pokemonInfoDiv
