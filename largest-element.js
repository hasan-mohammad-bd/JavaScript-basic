function largestElement(numbers) {
    let largest = numbers[0]; //this declaration of this value, should be out of the loop, the value is set the first value of the array, because the negative value can be less bigger than the 0. one that case, the result will be 0.
    for (let i = 0; i< numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element; //here largest will always take the largest value and keep compare with the element after comparing all the element the largest will take the largest value.
        }
        
    }
    return largest;
}

//with positive value
const ages = [12,34,54,57,54,22,45]
const oldest = largestElement(ages);
console.log(oldest);

//with negative value
const templer = [-12,-5,-2,-5]
const oldest2 = largestElement(templer)
console.log(oldest2);


//homework: write a function to find the lowest element of an array 
