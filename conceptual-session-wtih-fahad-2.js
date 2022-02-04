//Problem Solving 
//============================================
//approach a problem

//Problem-1
//Count the number of vowels in a string



function countVowel(sentence) {
    let count =  0;
    let vowels = ["a","e","i","o","u"] //second way
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i].toLowerCase();
        // if(letter == "a" || letter == "e"|| letter == "i" || letter == "o" || letter == "u") //first way
        if(vowels.indexOf(letter) > -1) //second way //!= 1 also work.
        count = count + 1;
    }
    return count
}

let string = "Quick brown fox jumps over the lazy dog"
let theVowel = countVowel(string);
console.log(theVowel);


//problem-2
//function for Mular dam
//for first 2kg  - 30 tk per kg
//for more that 2kg -25 tk per kg.
//write a function to calculate total price based on given quantity.

function mularDam(quantity) {
    if (typeof quantity != "number"){
        return "Please enter a valid quantity"
    }

    if(quantity <= 0){
        return "please enter a valid quantity"
    }

    if (quantity > 20){
        return "Please want less than that"
    }

    let price;
    if (quantity <= 2){
        price = quantity * 30;
    } else {
        price = quantity * 25;
    }
    return price;
}

console.log(mularDam(3));


//problem-3
//Calculate Electricity bill
//For first 100 unit - 5 tk per unit
//For more than 100 unit 6 tk for every unit more than 100.
//For more than 100 unit 7 tk for every unit more than 200.

function electricityBill(unit){
    let bill;
    if(unit <= 100){
        bill = unit * 5; 
    } else if(unit > 100 && unit < 200) {// unit <=100, unit <200, unit >200 aivabeo lakha jae, abr shobChite boro to shto unit lakleo chlbe, shakhane < use hobe.
        let firstBill = 100 *5;
        let remainingBill = (unit - 100) * 6;
        bill = firstBill + remainingBill;
    } else if(unit > 200){
        let firstBill = 100 * 5;
        let secondBill = 100 * 6;
        let remainingBill = (unit -200) * 7;
        bill = firstBill + secondBill + remainingBill;
    }
    return bill;

}

console.log(electricityBill(250));

//problem-4

//Find if anybody got A+ from your friends
//the return will be for one friend.
const marks = [78,87,98];

function checkGPA(marks){
    for(let i = 0; i <marks.length; i++){
        let element = marks[i];
        if(element >= 80){
            return true
        }
}
    return false;

}

console.log(checkGPA(marks));

//find the largest element of an array;
//homework

