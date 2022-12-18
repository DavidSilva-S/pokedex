import { fetchPokemonsAll, fetchPokemonsById, getPokemonByItsname } from "./handleFetchPokemons";
import handleUpdateDisplay from "./handleUpdateDisplay.js";

const pokeGotFromApi = [];
const arrowLeft = document.querySelector(".arrow-left");
const arrowUp = document.querySelector(".arrow-up");
const arrowRight = document.querySelector(".arrow-right");
const arrowDown = document.querySelector(".arrow-down");
const buttonGetPokemons = document.querySelector(
  ".pokedex-container-bottom-green"
);

const inputUser = document.querySelector('.search-pokemon')
const buttonSearchPokemon = document.querySelector('.btn-search')

let id = 1;

buttonSearchPokemon.addEventListener("click", () => {
  getPokemonByItsname(inputUser.value)
  .then(pokemon => 
    handleUpdateDisplay(pokemon.name,pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default)
  )
})


buttonGetPokemons.addEventListener("click", () => {
  fetchPokemonsById("1").then((pokemons) => {
    let { name, sprites } = pokemons;
    console.log(
      name,
      sprites.versions["generation-v"]["black-white"].animated.front_default
    );
  });
});

window.addEventListener("keyup", ({ key }) => {
  if (key == "ArrowLeft" || key == "ArrowRight") {
    if (key === "ArrowRight") {
      if (id >= 905) return alert("The limit of pokemon reached!");
      id++;
      fetchPokemonsById(id).then((pokemons) => {
        let { name, sprites } = pokemons;
        handleUpdateDisplay(
          name,
          sprites.versions["generation-v"]["black-white"].animated.front_default
        );
      });
    }
    if (key === "ArrowLeft") {
      if (id === 1) return;
      id--;
      fetchPokemonsById(id).then((pokemons) => {
        let { name, sprites } = pokemons;
        handleUpdateDisplay(
          name,
          sprites.versions["generation-v"]["black-white"].animated.front_default
        );
      });
    }
  }

  return;
});

arrowLeft.addEventListener("click", () => {
  if (id === 1) return;
  id--;
  fetchPokemonsById(id).then((pokemons) => {
    let { name, sprites } = pokemons;
    handleUpdateDisplay(
      name,
      sprites.versions["generation-v"]["black-white"].animated.front_default
    );
  });
});

arrowRight.addEventListener("click", () => {
  if (id >= 905) return alert("The limit of pokemon reached!");
  id++;
  fetchPokemonsById(id).then((pokemons) => {
    let { name, sprites } = pokemons;
    handleUpdateDisplay(
      name,
      sprites.versions["generation-v"]["black-white"].animated.front_default
    );
  });
});
