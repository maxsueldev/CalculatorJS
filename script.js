let isOn = false;

const screen = document.querySelector(".screen");
const screenText = screen.querySelector("h1");

const onC = document.querySelector("button.onC");
const ce = document.querySelector("button.ce");

function toogleOnClear() {  // On ou Clear
  // Se estiver desligada, liga. Se estiver ligada, zera.
    if(!isOn) {
        isOn = true;
    } 
    screenText.textContent = 0;
    return isOn;
}

function checkIsOn() {
    if(!isOn) {
        return;
    }
    return true;
}

function ceFunction() {
    if(checkIsOn()) {
        screenText.textContent = 0;
    }
}

onC.addEventListener("click", toogleOnClear);
ce.addEventListener("click", ceFunction);
