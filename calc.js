//Calculator Program
const display = document.getElementById("display");
function appendToDisplay(input){
display.value += input;
}
function clearDisplay(){
display.value ='';
}
function calculate(){
display.value =eval(display.value);// evaluation function is like a calculator: eval(1+2+3) will give 6
}