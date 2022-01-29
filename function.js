// variable
var fovoriteBook = "4 hour wrk week"; 
// array
var BookList = ["positionning", "hooked", "start with why"];

// to find any index number of an array item
var shoeDogIndex = BookList.indexOf("hooked");

// to find any item of an perticular index
BookList[1] = "dont hooked";

// to add a item in an arry at last
BookList.push("small giants");

// to remove an item from an arry from the last
BookList.pop();

// conditionals
if (BookList[1] == "hooked"){
    console.log("iam hooked");
}
else {
    console.log("i am not hooked");
}

// while loop 
var i = 0;
while(i < 15){
    console.log(i);
    i++;
}

// for Loop
for (var i=0; i <15; i++){
    console.log(i);
}

// function-----------

// function declaration
function startFan(){
    console.log("walk towards the switch");
    console.log("press the switch");
}

// call the function
startFan();

console.log("take breakfast");
console.log("take shower");
startFan();


// loop vs finctionq

// loop runs a list as once, and run on that area
// function can be call anytime, any where.


// function parameter, funtion return

// input parameter
function bringSingara(taka) {
    console.log("singarer jonno dise ",taka)
    console.log("mamaisngara den");
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 300; //the value can be in a variable.
var singara = bringSingara(money); //calling the function //start from here
console.log("Ai nen singara", singara);

// multiple parameter
function addTwo(num1, num2) { //the first parameter will take the first declered value
    console.log(num1, num2);
    var total = num1 + num2
    return total;
}

var firstNumber = 35;
var seconNumber = 37;
var result = addTwo(firstNumber, seconNumber);
console.log("result value is:",result);

// debug: see what is happning
// selecte the line with red dot, run the debug with debug button f10 is for go to next line
//f11 go into next line

// Multiplication function

function multiplay(num3, num4) {
    var result = num3 + num4;
    return result;
}

var tatal = multiplay(4,23);
console.log("total after Multiplication", tatal);

// bioge

function bioge(num5, num6) {
    var result = num5 - num6;
    return result;
}

var viogefol = bioge(55,5);
console.log(viogefol);

//vag

function vag(num8,num9) {
    var result = num8 / num9;
    return result;
}

var vagfol = vag(50,10);
console.log(vagfol);





