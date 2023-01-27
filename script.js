"use strict"

let isOn = false;
let currentValue = 0;
let currentOtherValue = 1;
let currentOperator;

const screen = document.querySelector(".screen");
const screenText = screen.querySelector("h1");
const screenPrevious = screen.querySelector("p");

const onC = document.querySelector("button.onC");
const ce = document.querySelector("button.ce");
const btnOff = document.querySelector("button.btnOff");

//btns de operacoes simples
const sum = document.querySelector("button.sum");
const sub = document.querySelector("button.sub");
const mult = document.querySelector("button.mult");
const division = document.querySelector("button.division");

// Pegar todos os botoes de numeros da calculadora
const buttonsNum = document.querySelectorAll("button.num");
    
function toogleOnClear() {  // On ou Clear
  // Se estiver desligada, liga. Se estiver ligada, zera.
    if(!checkIsOn()) {
        isOn = true;
    } 
    currentValue = 0;
    screenText.textContent = 0;
    screenPrevious.textContent = "";

    return isOn;
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
}

function ceFunction() {
    
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

function operateValues(event) {
    if(checkIsOn) {
        let keyOperator = event.target.textContent; 
        if(keyOperator == "+") {
            currentValue += Number(screenText.textContent);
            currentOperator = "+";
        } else if(keyOperator == "x") {
            currentOtherValue *= Number(screenText.textContent);
            console.log(currentOtherValue);
            currentOperator = "x";
        }
        if(currentOtherValue !== 1) currentValue = currentOtherValue;

        screenText.textContent = '';
        screenPrevious.textContent = `${currentValue} ${currentOperator}`;
    };
}

function sumValues() {
    currentValue += Number(screenText.textContent);
    currentOperator = "+";
    screenText.textContent = '';
    screenPrevious.textContent = `${currentValue} ${currentOperator}`;
}

function multiplicateValues() {
    currentValue *= Number(screenText.textContent);
    currentOperator = "*";
    screenText.textContent = '';
    screenPrevious.textContent = `${currentValue} ${currentOperator}`;
}

function registerEvents() {
    buttonsNum.forEach(element => {
        element.addEventListener("click", addNumberToScreen);
    });

    window.addEventListener("keydown", addNumberToScreen);

    sum.addEventListener("click", operateValues);
    mult.addEventListener("click", operateValues);

    btnOff.addEventListener("click", offFunction);
    onC.addEventListener("click", toogleOnClear);
    ce.addEventListener("click", ceFunction);
}

window.addEventListener("load", registerEvents);
