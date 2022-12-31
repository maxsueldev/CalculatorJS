let isOn = false;

const screen = document.querySelector(".screen");
const screenText = screen.querySelector("h1");
const onOff = document.querySelector("button.on-off");

function toogleOnOff() {
    if(isOn) {
        isOn = false;
        screenText.textContent = "";
    } else {
        isOn = true;
        screenText.textContent = "0";
    }
}

onOff.addEventListener("click", toogleOnOff);