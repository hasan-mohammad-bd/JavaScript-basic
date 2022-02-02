//You have to organized your mind.
//=================================
//dont give up, just keep trying.
//=================================
//variable

let name = 4;
let second = 7;

first = second;//here assigning  first variable has changed to 7 as second;
// second will be unchanged.
// avoid this if not necessary.

// 1 = first; //here 1 is constant, which is undefined. output will comes with an error.

//increase the number of a variable
//===============================
first + 1; //here i didn't assign the increased value
first = first + 1; //right way, here the assigned the increase value in first(from the left)
first++; //shortcut;
first = 5 + first; 
first += 5; //shortcut;
first *=5; //as same as above;

//condition
//===============================
{} // here is for creating a black
//if the condition is true. the black will work
//if the first condition is true, the program would assume, other all condition is false even the other condition is true in general.
//if can be write 2 times to disconnect with if and else if
//if vs else if : if are written first if the "if" right or true. the else if will not work
let mark = 50;
if (mark > 10){
    console.log("Mark is greater than 10");
} 
else if (mark > 20){
    console.log("Mark is greater than 20");
}

else if ( mark > 30){
    console.log("Mark id greater than 30");
}

//dabble vs triple equal "="

1 == "1" //here just comparing the value.
1 === "1" // here will be compared, the value and data type.

//nested: condition within condition



//loop 
//===============================
// to do a work again and again 

let array =[3,4,5,6,78,9,]

for(let i = 0; i < array.length; i++){
    console.log(array[i]);//here < array.length must be used because length start from 1; the index start form 0, so the index is 1 less than in total. so index must be set 1 less to match up with index. thats why i < array.length is used. to use <= after length-1 can be use but it is unusual.
}

//function
//===============================
//assignment will be on function;
//right function structure before writhing a function
// function is a factory where row memorials will be putted in parameter and the with return there will be finished good.
//return should be done in function
//if I need to print(to see is my code working or not) the function than we need consol.log
//return can be dont once in one function.
//return should not be write in for loop. the loop will stop executing because return stop the function and get out.
// the if/else gives two different output one of return will be granted. 
//return can't be write outside of a function too.
//return the result of the function.


function isPositive(number) {
    let result 
    if(number > 0) {
        result = "positive"
    }
     else{
        result = "negative"
    }

    return result; //this way can be used to assign a return using a variable.
    
}
var thePositive = isPositive(3)
console.log(thePositive);

//approach to solve the problem
//===============================

//to do:
//Understand the question
//Visualize in your mind. use pen and paper if you are beginner.
// break into small parts 
// write the code
//simplify and optimize the code

//Problem-1
//write the positive number from 1 to 20;
//===============================

//step 1
//how would i get 1-20 number, think first.
// take a loop

//step 2
//how to find the even numbers

function printEven() {
    for(let i = 1; i <= 20; i++){
        // console.log(i); to see is the programme is working or not 
        if (i%2 == 0) //at the same, ==1 will bring odd. or use != to get odd. 
        console.log(i);
    }
}

printEven()

//problem-2
//count numbers devisable by 3 from 1-20
//===============================

// to easy understanding the question is explained as below:
//how many numbers within 20 can be devisable with 3. 
//if the number is not set to 20 the parameter need to know

function countNumbersDevisableByThree(){
    let count = 0;
    for(let i = 1; i <= 20; i++){
        if(i%3 == 0){
            count = count + 1 //here for every divisible number, 1 will be added every times.and will be sum together and stored in count variable. 
        }
    }
    return count
}

let result = countNumbersDevisableByThree();
console.log(result);


//problem-3 (homework)
//Count the number of vowel in a string;
//===============================

//problem-4
//calculate the average of all the numbers that is divisible by 3 from 1-n;
//==============================

function average(n) {
    let sum = 0, count = 0;
    for(let i = 1; i < n; i++){ //here n refers any number. here loop is not going through an array. so dont need to use n.length
        if(i%3 == 0){
            sum = sum + i; //here the divisible number will come like 3,6,9.. and all will be sum together and stored in sum variable
            count = count + 1; //here for every divisible number, 1 will be added every times.and will be sum together and stored in count variable. 
        }
    }
    let avg = sum /count; 
    return avg;
}

let result = average(100);
console.log(result);
