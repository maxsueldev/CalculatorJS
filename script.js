let isOn = false;

const screen = document.querySelector(".screen");
const screenText = screen.querySelector("h1");

const onC = document.querySelector("button.onC");
const ce = document.querySelector("button.ce");
const btnOff = document.querySelector("button.btnOff");
console.log(btnOff);

// console.log(buttonsCalc);

// Pegar todos os botoes da calculadora
const buttonsCalc = document.querySelectorAll("button");

const btns = [...buttonsCalc];
console.log(btns);


    
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

function offFunction() {
    isOn = false;
    screenText.textContent = "";
}

function ceFunction() {
    
}

function registerEvents(event) {
    buttonsCalc.forEach(element => {
        
    });
}



// Fazer um map para percorrer os botoes de numeros
btnOff.addEventListener("click", offFunction);
onC.addEventListener("click", toogleOnClear);
ce.addEventListener("click", ceFunction);

btns.addEventListener("click", function(event){
    console.log(event);
});

window.addEventListener("load", registerEvents);
