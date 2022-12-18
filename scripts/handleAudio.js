const pokemonSvg = document.querySelector(".pokemon-svg")

window.addEventListener("load", async () => {
 await playMusic()   
})

async function playMusic() {
    const audio = new Audio("../audio/thememusic.mp3")
    audio.loop = true
    try {
        await audio.play()
        console.log("playin audio")
    } catch (error) {
        console.error("error => " + error)
    }
}

pokemonSvg.addEventListener("click", () => {
    const audio = new Audio("http://play.pokemonshowdown.com/audio/cries/bulbasaur.mp3")
    audio.play()
})
