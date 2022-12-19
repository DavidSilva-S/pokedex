const pokemonScreenIn = document.querySelector('.podekex-screen-in');
const pokemonScreenName = document.querySelector('.screen-name-pokemon')
const pokemonSideScrenImg = document.querySelector('.side-pokedex-screen img')
const pokemonPokemonStatus = document.querySelector('.side-pokedex-screen .side-screen-status')

export default function handleUpdateDisplay(spriteImage, name, status) {
    pokemonScreenIn.firstElementChild.src = spriteImage
    pokemonScreenName.textContent = name.charAt(0).toUpperCase() + name.slice(1)
    pokemonSideScrenImg.src = `http://play.pokemonshowdown.com/sprites/ani/${name}.gif`
    pokemonPokemonStatus.innerHTML = `
    <p>atk: ${status.atk}<p>
    <p>def: ${status.def}<p>
    <p>hp: ${status.hp}<p>
    <p>speed: ${status.speed}<p>
`
}

