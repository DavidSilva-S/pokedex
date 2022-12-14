const colors = ["#ff0707", "#f9f100", "#00f900"];
const lightsHeaders = document.querySelectorAll(".circle");
const lightHeaderBlue = document.querySelector(".header-circle-blue");
let index = 0;

function changeColorCircleBlue() {
  lightHeaderBlue.style.backgroundColor === ""
    ? (lightHeaderBlue.style.backgroundColor = "blue")
    : (lightHeaderBlue.style.backgroundColor = "");
}

function changeColorHeaderLighs() {
  lightsHeaders[0].style.backgroundColor = "";
  lightsHeaders[1].style.backgroundColor = "";
  if (index >= lightsHeaders.length) {
    index = 0;
    lightsHeaders[1].style.backgroundColor = "";
    lightsHeaders[2].style.backgroundColor = "";
  }
  lightsHeaders[index].style.backgroundColor = colors[index];
  index++;
}

setInterval(() => {
  changeColorCircleBlue();
}, 3000);

setInterval(() => {
  changeColorHeaderLighs();
}, 1000);
