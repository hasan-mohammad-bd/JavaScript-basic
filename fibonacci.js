//here
// ith = (i-1)th + (i -2)th
const fibo = [0 , 1] //most need 2 value to do that.
for(let i = 2; i <= 10; i++){ //here the i value must be take 2 because 2 value already taken.
    fibo[i]= fibo[i - 1] + fibo[i - 2]; //give some gap around (-);
}
console.log(fibo);

//with function
//also the fixing the input
function fibonacciSeries(num) {
    if(typeof num != "number")
        return "Please give a number"
    if (num < 2){
        return " please give a positive number greater than 2"
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(13)
console.log(fiboSeries);