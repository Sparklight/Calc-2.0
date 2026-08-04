'use strict'

const inputElement = document.getElementById('disp');
const displayTwo = document.getElementById('dispTwo');
let memory;
let notError;
const outputWindow = document.querySelector('.outputWindow')
const symbols = ['+', '-', '/', '*'];

function countDotsAfterLastOp(example) {               // ищет в строке последний математический знак и определяет колличество '.' после него, если не находит, проверяет всю строку
  const match = example.match(/[+\-*/]([^+\-*/]*)$/);
  const currentNumberStr = match ? match[1] : example;
  return currentNumberStr.split('.').length - 1;
}

function btnClick(input) {    // ты писал, что функция нечитаемая, она стала короче, но не уверен, что достаточно
  inputElement.value += input; 
  const example = inputElement.value;
  const length = example.length;
  const lastChar = example.at(-1);
  const lastCharTwo = example.at(-2);
  let symboltest = symbols.some(char => example.includes(char));
  const matches = [...example.matchAll(/[+\-*\/]/g)];
  let lastSymbolindex; //= '0';
  let quantityDot = example.split(".").length - 1;
  console.log(quantityDot);
  if (matches.length > 0) {
    const lastMatch = matches[matches.length - 1];
    lastSymbolindex = lastMatch.index;
  }
    
  stringLength(example);               

  if (symbols.includes(lastChar) && symbols.includes(lastCharTwo)) {    
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
  }

  if ((lastChar === '.') && (countDotsAfterLastOp(example)) > 1) {
    inputElement.value = example.slice(0, -1);
  }

  if (example == ".") {                            // добавляет 0 перед "." в пустой строке
    inputElement.value = example.slice(0, -1);
  }                                                 

  if (inputElement.value == 'Error') {
    inputElement.value = example.slice(0, -1);
  } 

  if (!!symboltest) {
    try {
      displayTwo.value = eval (inputElement.value); 
      notError = displayTwo.value;
    }
    catch (error) {
        displayTwo.value = "Error";
    }
    if (displayTwo.value === "Error") {
      displayTwo.value = notError;
    }
    if (displayTwo.value === "undefined") {
      displayTwo.value = '';
    }
  } 
}

function clearDisp () {
  inputElement.value = ""; 
  displayTwo.value = '';
  memory = '';
  notError = '';
  outputWindow.style.fontSize = "150%";
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

  const length = example.length;

  stringLength(example);
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
  stringLength(example);
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
  inputElement.value += memory;
}

function stringLength(example) {
  if (example.length >= 22) {
    return inputElement.value = example.slice(0, -1);
  }

  if (example.length >= 18){
    return outputWindow.style.fontSize = "90%";
  }

  else if (example.length >= 14) {
    return outputWindow.style.fontSize = "110%";
  }

  else if (example.length < 13){
    return outputWindow.style.fontSize = "150%";
  }
}

  