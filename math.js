//search for javascript math 


// //negative to positive
const myNumber= -5
const output = Math.abs(myNumber); //there Math.abs gives the absulate number of 5

const myNumber= 6.59664;
const output = Math.ceil(myNumber)//Math.ceil increase the number to fullfil full number.
const output = Math.round(myNumber)//Math.around, take the nearest full number. less than 5 will be taken previous number,5 or more than 5 will be taken the next full number.
const output = Math.random()*6//Math.random, will give random number between 1 - 0; if you want within 10 number. multiply the number with Math.random().
const rounded = Math.ceil(output) //to make a full number take the which is declared the Math.random. at the same time floor/round can be used.
console.log(rounded);

for ( let i = 0; i <=20; i++){
    const output = Math.random() * 6;
    const rounded = Math.round(output);
    console.log(rounded);
}
//for loop can be used, to see the output multiple times at once.
//search for Math.power/Math.min/Math.max