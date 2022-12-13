let screen = document.querySelector('.podekex-screen-in')
const keysNotAlowed = [
    'AltGraph',
    'Enter',
    'Backspace',
    'Alt',
    'Control',
    'Shift',
    'OS'
]

const keysAlowed = [
    'AltGraph',
    'Enter',
]


window.addEventListener('keyup', ({key}) => {

    if (keysAlowed.includes(key))
        return

    
    if (keysNotAlowed.includes(key)) {
        screen.innerHTML = ""
        return
    }

    screen.innerHTML += key
})
