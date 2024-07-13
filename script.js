const input = document.querySelector("input");
const initPass = document.querySelector("#inputPass");
const validPass = document.querySelector("#validPass");
let passTips = document.querySelector("#passTips");
let passwordLabels = document.querySelectorAll(".check");

let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

initPass.addEventListener("focus", () =>{
    passTips.style.display = "block";
})
initPass.onblur = function(){
    passTips.style.display = "none";
}
let letter = document.querySelector("#letter");
let capital = document.querySelector("#capital");
let number = document.querySelector("#number");
let length = document.querySelector("#length");

initPass.addEventListener("keyup", () =>{


    let lowerCaseLetters = /[a-z]/g;
    if(initPass.value.match(lowerCaseLetters)) {  
        letter.style.color = "green";
    } else {
        letter.style.color = "rgb(171, 1, 1)";
    }
    
    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if(initPass.value.match(upperCaseLetters)) {  
        capital.style.color = "green";
    } else {
        capital.style.color = "rgb(171, 1, 1)";
    }
  
    // Validate numbers
    let numbers = /[0-9]/g;
    if(initPass.value.match(numbers)) {  
      number.style.color = "green";
    } else {
      number.style.color = "rgb(171, 1, 1)";
    }
    
    // Validate length
    if(initPass.value.length >= 8) {
      length.style.color = "green";
    } else {
      length.style.color = "rgb(171, 1, 1)";
    }
})

function check() {
  if (document.querySelector("#inputPass").value ==
  document.querySelector("#validPass").value) {
      initPass.className = "valid";
      validPass.className = "valid";
  
  } else {
      initPass.className = "invalid";
      validPass.className = "invalid";
  }
}

