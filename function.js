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



