'use strict'

const inputElement = document.getElementById('disp');
const displaytwo = document.getElementById('disptwo');
let memory
let notError

function btnClick (input) {
  inputElement.value += input; 
    let example = inputElement.value;
    let lastChar = example[example.length - 1];
    let lastCharTwo = example[example.length - 2];

  const length = example.length;
  // console.log(length);

    const symbols = /[+-/*]/;
    let symboltest = (symbols.test(example))

    if (length >= 22) {
       inputElement.value = example.slice(0, -1);
    }

    if (length >= 18){
      document.getElementsByClassName('outputWindow')[0].style.fontSize = "90%";
    }
    else if (length >= 14) {
      document.getElementsByClassName('outputWindow')[0].style.fontSize = "110%";
    }
    else if (length < 13){
      document.getElementsByClassName('outputWindow')[0].style.fontSize = "150%";
    }
  
  if ((lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') & 
      (lastCharTwo == '+' || lastCharTwo == '-' || lastCharTwo == '*' || lastCharTwo == '/')) {
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
    // console.log(newExample);
  }

  if (inputElement.value == 'Error') {
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
  } 

  if (symboltest == true) {
    try {
      displaytwo.value = eval (inputElement.value); 
      notError = displaytwo.value
    }
    catch (error) {
        displaytwo.value = "Error";
    }
    if (displaytwo.value == "Error") {
      displaytwo.value = notError;
    }
    if (displaytwo.value == "undefined") {
      displaytwo.value = '';
    }
  }
}

function clearDisp () {
   inputElement.value = ""; 
   displaytwo.value = '';
   memory = '';
   notError = '';
   document.getElementsByClassName('outputWindow')[0].style.fontSize = "150%";
   let paragraph = document.getElementById('p');
    paragraph.textContent = '';
}

function calculate() {
    let example = inputElement.value;
    try {
        inputElement.value = eval (inputElement.value);
    } 
    catch (error) {
        inputElement.value = "Error";
    }
    if (inputElement.value == 'undefined') {
        inputElement.value = '';
    }
    else if (inputElement.value == 'function Error() { [native code] }' ||
             inputElement.value == 'NaN') {
        inputElement.value = 'Error';
    }

    const length = example.length;
    if (length >= 22) {
       inputElement.value = example.slice(0, -1);
    }

    if (length >= 18){
      document.getElementsByClassName('outputWindow')[0].style.fontSize = "90%";
    }
    else if (length >= 14) {
      document.getElementsByClassName('outputWindow')[0].style.fontSize = "110%";
    }
    else if (length < 13){
      document.getElementsByClassName('outputWindow')[0].style.fontSize = "150%";
    }
   
}
function deleteOne() {
    let example = inputElement.value;
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
    console.log(inputElement.value);

    const length = example.length;
    console.log(length);
    if (length >= 18){
      document.getElementsByClassName('outputWindow')[0].style.fontSize = "90%";
    }
    else if (length >= 17) {
      document.getElementsByClassName('outputWindow')[0].style.fontSize = "110%";
    }
    else if (length <= 13){
      document.getElementsByClassName('outputWindow')[0].style.fontSize = "150%";
    }
}

function addInMemory() {
    let addMemory = inputElement.value;
    memory = addMemory.replace(/[^\w\s]|_/g, "");
    let paragraph = document.getElementById('p');
    paragraph.textContent = 'm';
    if (inputElement.value == '') {
      paragraph.textContent = '';
    }
}

function useMemory() {
    inputElement.value += memory
}
