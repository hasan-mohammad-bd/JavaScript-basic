function getFactorial(number){
    let factorial = 1;
    for(let i =1; i <= number; i++){
        fact = factorial * i;
    }
    return factorial;
}

var firstFactorial = getFactorial(7);
console.log("factorial of 7 is", firstFactorial);