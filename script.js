"use strict"   //using strict mode

let isOn = false;
let currentValue = 0;
let currentOtherValue = 1;
// let currentOperator;

//screen
const screen = document.querySelector(".screen");
const screenText = screen.querySelector("h1");
const screenPrevious = screen.querySelector("p");

//top buttons
const onC = document.querySelector("button.onC");
const ce = document.querySelector("button.ce");
const mrc = document.querySelector("button.mrc");
const mLess = document.querySelector("button.mLess");
const mPlus = document.querySelector("button.mPlus");

const btnOff = document.querySelector("button.btnOff");

//btns de operacoes simples
const sum = document.querySelector("button.sum");
const sub = document.querySelector("button.sub");
const mult = document.querySelector("button.mult");
const division = document.querySelector("button.division");

//Outras operacoes
const sqrt = document.querySelector("button.square");
const percent = document.querySelector("button.percent");

const dot = document.querySelector("button.dot");
const equal = document.querySelector("button.equal");

// Pegar todos os botoes de numeros da calculadora
const buttonsNum = document.querySelectorAll("button.num");
    
function toogleOnClear() {  // On ou Clear
  // Se estiver desligada, liga. Se estiver ligada, zera.
    if(!checkIsOn()) {
        isOn = true;
    } 
    currentValue = 0;
    currentOtherValue = 1;

    screenText.textContent = 0;
    screenPrevious.textContent = "";

    return isOn;
} 

function ceFunction() {
    if(checkIsOn()) {
        screenText.textContent = 0;
    }
}

function checkIsOn() {
    if(!isOn) {
        return;
    }
    return true;
}

function offFunction() {
    isOn = false;
    screenText.textContent = "";
    screenPrevious.textContent = "";
    currentValue = 0;
    currentOtherValue = 1;
}

function addNumberToScreen(event) {
    if(checkIsOn()) {
        if(screenText.textContent.length == 8) {  // Quantidade máxima de números na Calculadora
            return;  
        }
        const keyCode = getKeyCode(event);
        const key = document.querySelector(`button.num[data-key = "${keyCode}"]`);
    
        if(!key) {
            return;
        }

        if(screenText.textContent == 0) {
            screenText.textContent = key.textContent;
        } else {
            screenText.textContent += key.textContent;
        }
    } 
}

function getKeyCode(event) {
    let keyCode;
    
    if(event.type == "keydown") {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }
    return keyCode;
}

function addDot() {
    if(screenText.textContent.includes(".") || screenText.textContent == "") {
        return;
    }
    screenText.textContent += ".";
}

function equalFunction() {
    screenText.textContent = Number(screenText.textContent) + Number(currentValue);
}

function operateValues(event) {
    if(checkIsOn) {
        let keyOperator = event.target.textContent; 
        
        if(keyOperator == "+") {
            currentValue += Number(screenText.textContent);
            screenPrevious.textContent = `${currentValue} ${keyOperator}`;
        } else if(keyOperator == "-") {
            currentValue -= Number(screenText.textContent);
            screenPrevious.textContent = `${currentValue} ${keyOperator}`;
        } else if(keyOperator == "x") {
            currentOtherValue *= Number(screenText.textContent);
            screenPrevious.textContent = `${currentOtherValue} ${keyOperator}`;
        } else if(keyOperator == "÷") {
            currentOtherValue /= Number(screenText.textContent);
            screenPrevious.textContent = `${currentOtherValue} ${keyOperator}`;
        }

        screenText.textContent = '';
    };
}

function sqrtFunction() {
    currentValue = Number(screenText.textContent);
    screenText.textContent = Math.sqrt(currentValue);
}

function percentFunction() {
    currentValue = Number(screenText.textContent);
    screenText.textContent = currentValue / 100;

}

function registerEvents() {
    buttonsNum.forEach(element => {
        element.addEventListener("click", addNumberToScreen);
    });

    window.addEventListener("keydown", addNumberToScreen);

    sum.addEventListener("click", operateValues);
    sub.addEventListener("click", operateValues);
    mult.addEventListener("click", operateValues);
    division.addEventListener("click", operateValues);

    sqrt.addEventListener("click", sqrtFunction);
    percent.addEventListener("click", percentFunction);

    btnOff.addEventListener("click", offFunction);
    dot.addEventListener("click", addDot);
    equal.addEventListener("click", equalFunction);

    onC.addEventListener("click", toogleOnClear);
    ce.addEventListener("click", ceFunction);
}

window.addEventListener("load", registerEvents);