import "./styles/style.css";
import "./scripts/handleChangeLightHeader"
import "./scripts/handleButtonsEvents"
import "./scripts/handleFetchPokemons";
import "./scripts/handleUpdateDisplay"
import "./scripts/handleAudio"


window.onmessageerror = (e) => {
    console.error(e);
}