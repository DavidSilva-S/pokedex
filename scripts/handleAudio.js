const pokemonSvg = document.querySelector(".pokemon-svg")
const arrows = document.querySelectorAll('.arrow')
const pokSound = new Audio()
const buttonNotification = new Audio()

arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        buttonNotification.src = "../audio/notification.wav"
        buttonNotification.volume = 0.4
        buttonNotification.play()
    })
})

pokemonSvg.addEventListener("click", () => {
    pokSound.src = "http://play.pokemonshowdown.com/audio/cries/bulbasaur.ogg"
    pokSound.volume = 0.4
    pokSound.play()
})

