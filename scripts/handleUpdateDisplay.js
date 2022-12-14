import { fetchPokemonsAll } from './handleFetchPokemons'

const pokemonScreenIn = document.querySelector('.podekex-screen-in');
const pokemonScreenName = document.querySelector('.screen-name-pokemon')

export default function handleUpdateDisplay(name, urlImage) {
    let pokemonName = name.charAt(0).toUpperCase() + name.slice(1)    
    pokemonScreenIn.firstElementChild.src = urlImage
    pokemonScreenName.textContent = pokemonName
}

