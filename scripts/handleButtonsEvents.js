import { getPokemonById, getPokemonByItsName } from "./handleFetchPokemons";
import handleUpdateDisplay from "./handleUpdateDisplay.js";

const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right");
const inputUser = document.querySelector('.search-pokemon')
const buttonSearchPokemon = document.querySelector('.btn-search')
const menuHamburguer = document.querySelector('.pokedex-footer-bars-container')
const sidePokedex = document.querySelector('.side-pokedex')
const btnBattle = document.querySelector('.btn-battle')
let idPokemon = 0;
let secondsShowPopUp = 0
let toggle = false

menuHamburguer.addEventListener('click', () => {
  toggle = !toggle
  // sidePokedex.style.display = toggle ? 'block' : 'none'
  sidePokedex.style.transform = toggle ? "translateX(-400px)" : ""
  sidePokedex.style.transition = "transform ease-out 1s, display ease-out 4s"
})

window.addEventListener("keyup", async ({ key }) => {
  if (key !== 'Enter') return;
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

btnBattle.addEventListener('click', async () => {

  window.location.href ="https://pokedex-beta-drab.vercel.app//battle.html"

  // const { id, name, sprites, stats, weight, height } = await getPokemonById(idPokemon)

  // const infoPokemon = {
  //   id,
  //   name,
  //   sprite: sprites.versions["generation-v"]["black-white"].animated.front_default,
  //   status: {
  //     atk: stats[1].base_stat,
  //     def: stats[2].base_stat,
  //     hp: stats[0].base_stat,
  //     speed: stats[5].base_stat,
  //     weight,
  //     height
  //   }
  // }
})

buttonSearchPokemon.addEventListener("click", () => {
  searchPokemonByItsName(inputUser.value)
  inputUser.value = ""
})

arrowLeft.addEventListener("click", async () => {
  searchArrowLeft()
});

arrowRight.addEventListener("click", async () => {
  searchArrowRight()
});

function showPopUp() {
  console.log(infoPokemon)
  setInterval(showPopUp, 1000)
  console.log((`U've choosen ${name} and the battle will start at ${secondsShowPopUp} seconds`))
}

async function searchPokemonByItsName(inputUser) {
  const { id, name, sprites, stats, weight, height } = await getPokemonByItsName(inputUser)
  const infoPokemon = {
    id,
    name,
    sprite: sprites.versions["generation-v"]["black-white"].animated.front_default,
    status: {
      atk: stats[1].base_stat,
      def: stats[2].base_stat,
      hp: stats[0].base_stat,
      speed: stats[5].base_stat,
      weight,
      height
    }
  }

  handleUpdateDisplay(infoPokemon.sprite, infoPokemon.name, infoPokemon)
}

async function searchArrowLeft() {
  if (idPokemon === 1) return;
  idPokemon--;

  const { id, name, sprites, stats, weight, height } = await getPokemonById(idPokemon)
  const infoPokemon = {
    id,
    name,
    sprite: sprites.versions["generation-v"]["black-white"].animated.front_default,
    status: {
      atk: stats[1].base_stat,
      def: stats[2].base_stat,
      hp: stats[0].base_stat,
      speed: stats[5].base_stat,
      weight,
      height
    }
  }
  handleUpdateDisplay(infoPokemon.sprite, infoPokemon.name, infoPokemon)
}

async function searchArrowRight() {
  if (idPokemon >= 905) return alert("The limit of pokemon reached!");
  idPokemon++;
  const { id, name, sprites, stats, weight, height } = await getPokemonById(idPokemon)
  const infoPokemon = {
    id,
    name,
    sprite: sprites.versions["generation-v"]["black-white"].animated.front_default,
    status: {
      atk: stats[1].base_stat,
      def: stats[2].base_stat,
      hp: stats[0].base_stat,
      speed: stats[5].base_stat,
      weight,
      height
    }
  }
  handleUpdateDisplay(infoPokemon.sprite, infoPokemon.name, infoPokemon)
}
