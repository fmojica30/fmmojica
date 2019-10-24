// Declare variables for use in calculation
let currentVal, newVal, valueList, operand;
currentVal = "0";
valueList = []; //save up to two value here once two operate them

let inp = document.getElementById("inputText");
//test
// All funcitons needed

function initializeCalc() {
  newVal = "0";
  currentVal = "0";
  valueList = [];
  inp.textContent = currentVal;
}

//Input functions for all number buttons

function input0 (){
  if (currentVal === "0"){
    currentVal = "0";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "0";
    inp.textContent = currentVal;
  }
}

function input1 (){
  if (currentVal === "0"){
    currentVal = "1";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "1";
    inp.textContent = currentVal;
  }
}

function input2 (){
  if (currentVal === "0"){
    currentVal = "2";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "2";
    inp.textContent = currentVal;
  }
}

function input3 (){
  if (currentVal === "0"){
    currentVal = "3";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "3";
    inp.textContent = currentVal;
  }
}

function input4 (){
  if (currentVal === "0"){
    currentVal = "4";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "4";
    inp.textContent = currentVal;
  }
}

function input5 (){
  if (currentVal === "0"){
    currentVal = "5";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "5";
    inp.textContent = currentVal;
  }
}

function input6 (){
  if (currentVal === "0"){
    currentVal = "6";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "6";
    inp.textContent = currentVal;
  }
}

function input7 (){
  if (currentVal === "0"){
    currentVal = "7";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "7";
    inp.textContent = currentVal;
  }
}

function input8 (){
  if (currentVal === "0"){
    currentVal = "8";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "8";
    inp.textContent = currentVal;
  }
}

function input9 (){
  if (currentVal === "0"){
    currentVal = "9";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + "9";
    inp.textContent = currentVal;
  }
}

function inputDec (){
  if (currentVal === "0"){
    currentVal = "0";
    inp.textContent = currentVal;
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal + ".";
    inp.textContent = currentVal;
  }
}

// Function for operator combination
function oper(o) {
  switch (true) {
    case (o === "+"):
      return parseFloat(valueList[0]) + parseFloat(valueList[1]);
      break;
    case (o === "-"):
      return parseFloat(valueList[0]) - parseFloat(valueList[1]);
      break;
    case (o === "*"):
      return parseFloat(valueList[0]) * parseFloat(valueList[1]);
      break;
    case (o === "/"):
      return parseFloat(valueList[0]) / parseFloat(valueList[1]);
      break;
    case (o === "^"):
      return parseFloat(valueList[0]) ** parseFloat(valueList[1]);
      break;
  }
}

//Operator functions

function sum() {
  operand = "+";
  valueList.push(currentVal);
  currentVal = "0";
}

function min() {
  operand = "-";
  valueList.push(currentVal);
  currentVal = "0";
}

function mul() {
  operand = "*";
  valueList.push(currentVal);
  currentVal = "0";
}

function div() {
  operand = "/";
  valueList.push(currentVal);
  currentVal = "0";
}

function exp() {
  operand = "^";
  valueList.push(currentVal);
  currentVal = "0";
}

// Function for clear
function clear() {
  currentVal = "0";
  inp.textContent = currentVal;
}

function equals() {
  valueList.push(currentVal);
  console.log(valueList);
  if (valueList.length === 2 && operand !== "") {
    sum = oper(operand);
    if (sum.length <= 7) {
      inp.textContent = sum.toString();
      currentVal = sum.toString();
      operand = "";
      valueList = []
    } else {
      inp.textContent = sum.toString().substring(0,7);
      currentVal = sum.toString();
      operand = "";
      valueList = [];
    }
  }
}


/*/////////////////////// Test
initializeCalc();
input("2");
input("2");
console.log(valueList);
div();
console.log(valueList);
input("7");
console.log(valueList);
equals();
console.log(currentVal);
*////////////////////////

initializeCalc();

// Adding listeners to operators
document.getElementById("plus").addEventListener("click", sum);
document.getElementById("minus").addEventListener("click", min);
document.getElementById("multip").addEventListener("click", mul);
document.getElementById("div").addEventListener("click", div);
document.getElementById("exponent").addEventListener("click", exp);
document.getElementById("equals").addEventListener("click", equals);
document.getElementById("decimal").addEventListener("click", inputDec);

//Get Adding events to clear and A/C buttons
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("allClear").addEventListener("click", initializeCalc);


// Adding events to the number buttons
document.getElementById("zero").addEventListener("click", input0);
document.getElementById("one").addEventListener("click", input1);
document.getElementById("two").addEventListener("click", input2);
document.getElementById("three").addEventListener("click", input3);
document.getElementById("four").addEventListener("click", input4);
document.getElementById("five").addEventListener("click", input5);
document.getElementById("six").addEventListener("click", input6);
document.getElementById("seven").addEventListener("click", input7);
document.getElementById("eight").addEventListener("click", input8);
document.getElementById("nine").addEventListener("click", input9);
