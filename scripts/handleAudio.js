const pokemonSvg = document.querySelector(".pokemon-svg")
const arrows = document.querySelectorAll('.arrow')
const pokSound = new Audio("http://play.pokemonshowdown.com/audio/cries/bulbasaur.mp3")
const buttonNotification = new Audio("../audio/notification.wav")

arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        buttonNotification.volume = 0.4
        buttonNotification.play()
    })
})

pokemonSvg.addEventListener("click", () => {
    pokSound.volume = 0.4
    pokSound.play()
})
