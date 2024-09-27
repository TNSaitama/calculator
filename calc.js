//Calculator Program
const display = document.getElementById("display");
function appendToDisplay(input){
display.value += input;
}
function clearDisplay(){
display.value ='';
}
function calculate(){
display.value =eval(display.value);
// eval() : called evaluation function, it works like a calculator : eval(1+2+3) will give 6
//basically in our calculator it will read the value and give automatic result 
//if we click on 3 then * then 4 then = in our calculator it will give 12 automatically 
//
/*
IMPORTANT NOTE: eval() allows you to execute a string of code as if it were actual JavaScript code.
While it is a useful tool, it is a security risk. I would recommend using eval() ONLY for learning purposes and not any actual production code.
*/
}