import './style.css'

let screen = document.querySelector('.podekex-screen-in')

window.addEventListener('keyup', ({key}) => {
    
    if (key === 'Backspace') {
        
    }
    

    screen.innerHTML += key
})