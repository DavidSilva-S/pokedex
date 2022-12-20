const pokemonScreenIn = document.querySelector('.podekex-screen-in');
const pokemonScreenName = document.querySelector('.screen-name-pokemon')
const pokemonSideScrenImg = document.querySelector('.side-pokedex-screen img')
const pokemonPokemonStatus = document.querySelector('.side-pokedex-screen .side-screen-status')

const weightComputed = ({weight}) => {

    const pokWeight = (weight).toString()

    let statusFormatted;

    if (pokWeight.length === 2) {
        statusFormatted = pokWeight.replace(pokWeight.charAt(1), "")
    } else if (pokWeight.length === 3) {
        statusFormatted = pokWeight.replace(pokWeight.charAt(2), "")
    } else if (pokWeight.length === 4) {
        statusFormatted = pokWeight.replace(pokWeight.charAt(3), "")
    } else {
        statusFormatted = pokWeight
    }
    return statusFormatted
}


const heightComputed = ({height}) => {

    const pokHeight = (height).toString()    
    let statusFormatted2;

    if (pokHeight.length === 2) {
        statusFormatted2 = pokHeight.replace(pokHeight.charAt(1), "")
    } else if (pokHeight.length === 3) {
        statusFormatted2 = pokHeight.replace(pokHeight.charAt(2), "")
    } else if (pokHeight.length === 4) {
        statusFormatted2 = pokHeight.replace(pokHeight.charAt(3), "")
    } else {
        statusFormatted2 = pokHeight
    }
    return statusFormatted2
}


export default function handleUpdateDisplay(spriteImage, name, { id, status }) {
    
    pokemonScreenIn.firstElementChild.src = spriteImage
    pokemonScreenName.innerHTML = `
    <h2>${name.charAt(0).toUpperCase() + name.slice(1)}</h2>
    <span> weight: ${weightComputed(status)} kg </span>
    <span> height: ${heightComputed(status)} m </span>    
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

