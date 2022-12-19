const pokemonScreenIn = document.querySelector('.podekex-screen-in');
const pokemonScreenName = document.querySelector('.screen-name-pokemon')
const pokemonSideScrenImg = document.querySelector('.side-pokedex-screen img')
const pokemonPokemonStatus = document.querySelector('.side-pokedex-screen .side-screen-status')

export default function handleUpdateDisplay(spriteImage, name, {id, status}) {
    pokemonScreenIn.firstElementChild.src = spriteImage
    pokemonScreenName.innerHTML = `
    <h2>${name.charAt(0).toUpperCase() + name.slice(1)}</h2>
    <span> weight: ${Math.floor(status.weight / 2.2046)} kg </span>
    <span> height: ${Math.floor(status.height / 3.2808)} m </span>    
    `
    pokemonSideScrenImg.src = `http://play.pokemonshowdown.com/sprites/ani/${name}.gif`
    pokemonPokemonStatus.innerHTML = `
        <span style="position: absolute;left: 3%;bottom: 3%;">#${id} </span>
        <p>atk: ${status.atk}<p>
        <p>def: ${status.def}<p>
        <p>hp: ${status.hp}<p>
        <p>speed: ${status.speed}<p>
`
}

