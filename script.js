let isOn = false;

const screen = document.querySelector(".screen");
const screenText = screen.querySelector("h1");

// const buttons = document.querySelectorAll("button");
// const onOff = buttons.querySelector(".on-off");

const onOff = document.querySelector("button.on-off");
const ce = document.querySelector("button.ce");

function toogleOnOff() {
    if(isOn) {
        isOn = false;
        screenText.textContent = "";
        // console.log(isOn);
    } else {
        isOn = true;
        screenText.textContent = 0;
        // console.log(isOn);
    }
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
        screenText.textContent = "test";
    }
}



// console.log(isOn);

onOff.addEventListener("click", toogleOnOff);
ce.addEventListener("click", ceFunction);