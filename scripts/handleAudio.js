const pokemonSvg = document.querySelector(".pokemon-svg")
const themeAudio = new Audio("../audio/thememusic.mp3")
const audio = new Audio("http://play.pokemonshowdown.com/audio/cries/bulbasaur.mp3")


window.addEventListener("load", async () => {
 await playMusic()   
})

async function playMusic() {
    themeAudio.loop = true
    try {
        await themeAudio.play()
        console.log("playin audio")
    } catch (error) {
        console.error("error => " + error)
    }
}

pokemonSvg.addEventListener("click", () => {
    audio.play()
})
