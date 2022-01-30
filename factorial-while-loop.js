// factorial with while loop
function getFactorial(number){
    let factorial = 1; //if we multiple something the initial number is 1; if we add something together the initial number will be 0;
    let i = 1;
    while(i <= number){
        factorial = faactorial * i;
        i++;
    }
    return factorial;
}

// while loop reverse

const myFactorial = getFactorial(6);
console.log(myFactorial);

function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial

}

const myFactorial = getFactorial(6);
console.log(myFactorial);


//factorial with for loop reverse

function getFactorial2(number){
    let factorial = 1;
    for(let i= number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial = getFactorial2(6);
console.log(myFactorial);