// initial way to do this
// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);

//is even 
const number = 145;
function isEven(number) {
    if (number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log("is my number even is:",isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log(isHerNumberEven);

// is add function
function isOdd(number) {
    if (number % 2 == 1){
        return true;
    }
    return false;
}

//is add function with !=
function isAddWithUnqual(number) {
    if (number % 2 != 0){
        return true;
    }
    return false;
}

