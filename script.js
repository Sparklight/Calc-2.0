'use strict'

const inputElement = document.getElementById('disp');
const displaytwo = document.getElementById('disptwo');
let memory
let notError
const symbols = /[+-/*]/;

function btnClick(input) {
  inputElement.value += input; 
    const example = inputElement.value;
    let lastChar = example[example.length - 1];
    let lastCharTwo = example[example.length - 2];
    const length = example.length;
    // console.log(length);
    let symboltest = symbols.test(example);
    const lastDotIndex = example.lastIndexOf(".");
    console.log(lastDotIndex);
    let lastSymbolindex = '0';
    const matches = [...example.matchAll(/[+-/*]/g)];
    console.log(lastSymbolindex);
    
    if (matches.length > 0) {
      const lastMatch = matches[matches.length - 1];
      lastSymbolindex = (lastMatch.index);
      //console.log(lastMatch.index);
    }
    
    if (lastSymbolindex == 'undefined') {
      lastSymbolindex = '0';
      //console.log(lastSymbolindex);
    }

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
  
  
   
    if ((lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') && 
      (lastCharTwo === '+' || lastCharTwo === '-' || lastCharTwo === '*' || lastCharTwo === '/')) {
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
    // console.log(newExample);
  }
  
/** 
  if (['+', '-', '*', '/'].some(function(element) { return element === lastChar && element === lastCharTwo})) {
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
  }

  if ((lastChar === ['+', '-', '*', '/']) && (lastCharTwo === ['+', '-', '*', '/'])) {
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
  }
*/
  if ((lastDotIndex > lastSymbolindex) && (lastChar === '.')) {       // НЕ РАБОТАЕТ (должно запрещать ставить вторую "." в любых ситцациях)
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
  }
  else if ((lastChar === '.') && (lastCharTwo === '.')) {      // удаляет вторую подряд "."  
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
  } 
  if (example == ".") {                            // добавляет 0 перед "." в пустой строке
    let newExample = "0" + example
    inputElement.value = newExample;
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
   const paragraph = document.getElementById('p');
   paragraph.textContent = '';
}

function calculate() {
    const example = inputElement.value;
    let previous = example;
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
    //if (inputElement.value == "Error") {                                                 //при появлении "Error" возвращает предыдущее значение переменной
    //  inputElement.value = previous;
    //}

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
    const example = inputElement.value;
    let newExample = example.slice(0, -1);
    if (inputElement.value == 'Error') {     // удаляет всю строку при надписи Error
      newExample = '';
    }
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
    const paragraph = document.getElementById('p');
    paragraph.textContent = 'm';
    if (inputElement.value == '') {
      paragraph.textContent = '';
    }
}

function useMemory() {
    inputElement.value += memory
}
