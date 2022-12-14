import { fetchPokemonsAll, fetchPokemonsById } from "./handleFetchPokemons";
import handleUpdateDisplay from "./handleUpdateDisplay.js"

const pokeGotFromApi = [];
const arrowLeft = document.querySelector(".arrow-left"); 
const arrowUp = document.querySelector(".arrow-up"); 
const arrowRight = document.querySelector(".arrow-right"); 
const arrowDown = document.querySelector(".arrow-down"); 
const buttonGetPokemons = document.querySelector(
    ".pokedex-container-bottom-green"
  );
let id = 0

buttonGetPokemons.addEventListener("click", () => {
  fetchPokemonsById('2').then((pokemons) => { 
  let {name, sprites} = pokemons
  handleUpdateDisplay(name, sprites.other['official-artwork'].front_default)
})});


arrowLeft?.addEventListener("click", () => {
  if(id === 0) return;
  id--;
  fetchPokemonsById(id).then((pokemons) => { 
    let {name, sprites} = pokemons
    handleUpdateDisplay(name, sprites.other['official-artwork'].front_default)
  })
})

arrowRight?.addEventListener("click", () => {
  if(id >= 905) return alert("The limit of pokemon reached!")
  id++;  
  fetchPokemonsById(id).then((pokemons) => { 
    let {name, sprites} = pokemons
    handleUpdateDisplay(name, sprites.other['official-artwork'].front_default)
  })
})
