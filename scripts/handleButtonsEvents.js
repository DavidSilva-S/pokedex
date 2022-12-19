import { getPokemonById, getPokemonByItsName } from "./handleFetchPokemons";
import handleUpdateDisplay from "./handleUpdateDisplay.js";

const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right");
const inputUser = document.querySelector('.search-pokemon')
const buttonSearchPokemon = document.querySelector('.btn-search')
let idPokemon = 1;


window.addEventListener("keyup", async(e) => {
  if (e.key !== 'Enter') return; 
  searchPokemonByItsName(inputUser.value)
})

buttonSearchPokemon.addEventListener("click", () => {
  console.log(buttonSearchPokemon);
  searchPokemonByItsName(inputUser.value)
})

window.addEventListener("keyup", async ({ key }) => {
  if (key == "ArrowLeft" || key == "ArrowRight") {
    if (key === "ArrowRight") {
      searchArrowRight()
    }
    if (key === "ArrowLeft") {
      searchArrowLeft()
    }
  }

  return;
});

arrowLeft.addEventListener("click", async () => {
  searchArrowLeft()
});

arrowRight.addEventListener("click", async() => {
  searchArrowRight()
});

async function searchPokemonByItsName(inputUser) {
  const { id, name, sprites, stats } = await getPokemonByItsName(inputUser)
  const infoPokemon = {
    id,
    name,
    sprite: sprites.versions["generation-v"]["black-white"].animated.front_default,
    status: {
      atk: stats[1].base_stat,
      def: stats[2].base_stat,
      hp: stats[0].base_stat,
      speed: stats[5].base_stat,
    }
  }

  handleUpdateDisplay(infoPokemon.sprite, infoPokemon.name, infoPokemon.status) 
}

async function searchArrowLeft() {
  if (idPokemon === 1) return;
  idPokemon--;

  const { id, name, sprites, stats } = await getPokemonById(idPokemon)
      const infoPokemon = {
        id,
        name,
        sprite: sprites.versions["generation-v"]["black-white"].animated.front_default,
        status: {
          atk: stats[1].base_stat,
          def: stats[2].base_stat,
          hp: stats[0].base_stat,
          speed: stats[5].base_stat,
        }
      }
      handleUpdateDisplay(infoPokemon.sprite, infoPokemon.name, infoPokemon.status)  
}

async function searchArrowRight() {
  if (idPokemon >= 905) return alert("The limit of pokemon reached!");
  idPokemon ++;
  const { id, name, sprites, stats } = await getPokemonById(idPokemon)
      const infoPokemon = {
        id,
        name,
        sprite: sprites.versions["generation-v"]["black-white"].animated.front_default,
        status: {
          atk: stats[1].base_stat,
          def: stats[2].base_stat,
          hp: stats[0].base_stat,
          speed: stats[5].base_stat,
        }
      }
      handleUpdateDisplay(infoPokemon.sprite, infoPokemon.name, infoPokemon.status)
}
