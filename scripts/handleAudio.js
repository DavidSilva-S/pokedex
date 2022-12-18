const pokemonSvg = document.querySelector(".pokemon-svg")

// window.onload = playMusic

function playMusic(params) {
    const audio = new Audio("../audio/ILikeNiggas.mp3")
    audio.loop = true
    audio.play()
}

pokemonSvg.addEventListener("click", () => {
    const audio = new Audio("http://play.pokemonshowdown.com/audio/cries/bulbasaur.mp3")
    audio.play()
})
