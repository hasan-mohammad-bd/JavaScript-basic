//function 
//---------------------------------------------------------
//function can be called anytime if we need a task performed by the function.

//function can be called 3 ways(invoke way is to called the function by its name )

//will take input

//will do a particular work

//function name is very important

//parameter: can be input through, it is work like variable

//function has a block where to define the task

//function return a result after doing given task

//argument: value is argument, when the function is called with the name and the value, the value is the argument.

//return: return is the output of an particular task. the return will comes up with given work result. if a function find a return keyword, it pop out from a function with the return result.

//function output can be seen by consol.log but it do not workable like return because you can only see the result by yourself,it will not return the function calculation where it is called.

//break: programme stop at the break point and stop the process.

//console.log: its is the output of an task doing by the programme. its easy to see the what the programme doing.




//declare a function
function sumOfNumbers(num1, num2) {
    var result = num1 + num2;
    return result;
}

var sum = sumOfNumbers(76, 4);
console.log(sum);

//problems:1
//Write a simple function that takes name as a parameter and then return a custom message.

function customMessage(yourName){
    var theMessage = yourName+ " " + "How are you ?"
    return theMessage;
}

var myName = "Hasan";
var theMessage = customMessage(myName);
console.log(theMessage);

//-----------------------------------------------------------
//how to approach a problem? 
//see as below:
//read the problem
//what is the requirement? 
//what would be the return?
//---------------------------------------------------
//concatenation: it is a attachment of data together rather than sum.
//-----------------------------------------------------------


//problem-2

//Write a function for a food delivery service that sells 'Pizza" only. Each pizza coasts $10 This function takes the food name & quantity as parameter and then return a custom message with order info. This function should be smart enough to handle wrong parameter inputs.
//---------------------------------------------------
//here:
//requirement: name and quantity
//return: message "what is the price of the pizza and pizza name"
//it will be smart enough to handle wrong parameter inputs.
//---------------------------------------------------

function pizzaPanda(foodName, quantity){
    if(foodName.toLowerCase() !== "pizza"){ //the input will be converted as lower case and will be checked with "pizza" 
        return "sorry we sell pizza only."
    }

    if (quantity > 10) { 
        return "Sorry, Only 10 pizza left." //additional. quantity remain in hand
    } 
    else if(0 >= quantity) { 
        return "Please put the correct amount" //additional. 0 and (-) digits can not input
    }
    var price = 10 * quantity;
    var Message = "Order successful!, order info:" + foodName + "Price:" +" "+ price + "$";
    return Message;
}

console.log(pizzaPanda("Pizza",-1));

//---------------------------------------------------

//object: 
//object is a data type
//---------------------------------------------------
var person = {
    name: "Hasan",
    age: 27,
    height: "5 feet 9 inch.",
    hairColor: "Black",
    male: true,
    cardNumbers: [383383838, 3383838383]
}

// var personName = "Mohammad"
// console.log(personName);


//access to a particular value:
console.log(person.male);
console.log(person.cardNumbers[1]); //like python, data can be access 


// template lateral
var person1 = "Rakib";
var hisAge = 56;

var hisDetails = `His name is ${person1}. he is ${hisAge} years old`
//here $ is used for to declare a variable

//switch case
// switch is rarely used in real life
var age = 40;

switch (age){
    case 40:
        console.log("too old");
        break
    case 25:
        console.log("young");
        break
    case 10:
        console.log("child");
        break
    default:
        console.log("I dont know");
}

console.log("I am for checking purpose to see where to break");

//--------------------------------------------------------

//for Loop

for(var i = 0; i < 11; i++) {
    console.log(i);
}

function prienter(numberLimit){
    for (var i = 0; i <numberLimit + 1 ; i++){
        console.log(i);
    }

}

