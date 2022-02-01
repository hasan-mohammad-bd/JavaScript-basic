function lowElement(numbers){
    let min = numbers[0]; 
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < min){
            min = element
        }
    }
    return min
}

var minNumber = lowElement([34,56,75,12,34]);
console.log(minNumber);
