let input = document.querySelectorAll("input");
let initPass = document.querySelector("#inputPass");
let validPass = document.querySelector("#validPass");
let passTips = document.querySelector("#passTips");
let passwordLabels = document.querySelectorAll(".check");
let message = document.querySelector("#message");
let message2 = document.querySelector("#message2");

let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

initPass.addEventListener("focus", () =>{
    passTips.style.display = "flex";
    passTips.style.flexDirection = "column";
    passTips.style.height = "12em";
    if (validPass.value != ""){
      message2.style.display = "block";
      message2.className = "invalid";
      message.style.display = "none";
      passTips.style.fontSize = "calc(0.36rem + 0.4vw)"
      document.querySelector("#tipTitle").style.display = "none";
    }
    else{
      message2.style.display = "none";
    }

})
initPass.onblur = function(){
    passTips.style.display = "none";
    message.style.position = "absolute";
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
      initPass.className = "text-dark";
      validPass.className = "text-dark";
      message.style.display = "none";
  
  } else {
      initPass.className = "invalid";
      validPass.className = "invalid";
      message.style.display = "block";
      message.className = "small-red";
      message.textContent = "Passwords do not match";
  }
}

for (let inp of input){

  inp.addEventListener("click", () =>{
    if (inp.value == ""){
      inp.setAttribute("required");
      inp.className = "invalid";
    }
    else {
      inp.removeAttribute("required");
    }
  })
}