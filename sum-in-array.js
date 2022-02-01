const numbers = [44, 34, 33, 98, 76, 78];
let sum = 0; //this must be out of the loop, because the declaration will be repeated again and again.
for(let i = 0; i <numbers.length; i++){
     const element = numbers[i];    
     sum = sum + element
}
console.log(sum); //this must be out the loop, because the result can be shown so many times.


//with function

function arrayTotal(numbers) {
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum //it must be out of the loop, otherwise the answer will be incorrect.
}

const total = arrayTotal([76,45,34,34])
console.log(total);


