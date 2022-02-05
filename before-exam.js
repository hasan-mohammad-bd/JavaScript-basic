// const myNumber =  -5;
// const output = Math.abs(myNumber);
// console.log(output);

// const myNumber = 6.888798;
// const output = Math.ceil(myNumber);
// const output = Math.round(myNumber);
// const output = Math.floor;(myNumber);
// const output = Math.random()*8;


//find the min number from an array;

function findMin(number){
    let minNumber=number[0];
    for(let element of number){
        if(element < minNumber){
            minNumber = element;
        }
    }
    return minNumber;

}

const theArray = [37,38,88,33,43,4,322,44,4]
const theSmallNumber = findMin(theArray)
console.log(theSmallNumber);





//remove duplicate items from and array;

function findDuplicate(array) {
   let theNewArray = []
   for(let element of array) {
       if(theNewArray.indexOf(element) == -1){
           theNewArray.push(element);
       }
   }
   return theNewArray;
}

let thisArray = [78,78,33,65,33,44,44,87,78,78,90,90]
const noDuplicate = findDuplicate(thisArray);
console.log(noDuplicate);





//reverse an string.
function reverseString(theString) {
    let reverseString = "";
    for(let element of theString){
        reverseString = element + reverseString; //here elements are adding from the behind instead from the front.
    }
    return reverseString;
}
const reversed = reverseString("hello what is going on")
console.log(reversed);

/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed

the quantity is changing
*/
//Problem- give to total wood need to make bed table chair

function amountOfWoodNeeded(chairQuantity, tableQuantity, bedQuantity){
    let totalWoodChair = 3 * chairQuantity;
    let totalWoodTable = 10 * tableQuantity;
    let totalBedWood = 50 * bedQuantity;

    let totalWoodNeeded = totalWoodChair + totalWoodTable + totalBedWood;

    return totalWoodNeeded

}

console.log(amountOfWoodNeeded(1,1,2));


//problems- set foobar there 5 and 3 can be deviled, set foo where 3 can be divided, set bar where 5 can be divided;


    for(i = 1; i <= 50; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("foobar");
        }
        else if (i%3 == 0){
            console.log("foo");
        }
        else if(i%5 == 0){
            console.log("bar");
        }
        else {
            console.log(i);
        }
}

//find the cheapest phone from array of phone

const phones = [
    {name: "Samsung 4", price: 35555, camera:18, storage: 32},
    {name:"walton 45", price: 13456, camera:34, storage: 22},
    {name:"xi 45", price: 134456, camera:34, storage: 22},
    {name:"Opp 45", price: 13456, camera:34, storage: 22},
    {name:"nokia 45", price: 124345, camera:34, storage: 22},
    {name:"htc 45", price: 38378, camera:34, storage: 22}
];

let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
    
}
console.log(cheapest);

//animal count. the count has different value in different stop's number. its easy as hell.
//animal density in first 10 km = 10;
//animal density in second 50 km = 20;
//animal density in first rest of km = 50;

function animalInTotal(km){
    if(km <= 10){
       let animalForFirst10km = 10 * km;
       return animalForFirst10km
    }

    else if(km <= 50) {
        let animalForFirst10km = 10 * 10;
        let remainingKm = km -10
        let animalForSecond50km = remainingKm * 20
        let totalAnimals = animalForFirst10km + animalForSecond50km
        return totalAnimals
    }
    else if(km > 50){
        let animalForFirst10km = 10 * 10;
        let animalForSecond50km = 50 * 20;
        let remainingKm = km - 60;
        let animalforRest = remainingKm * 50
        let totalAnimals = animalForFirst10km + animalForSecond50km + animalforRest;
        return totalAnimals
    }
}

console.log(animalInTotal(70));

//total shopping card price calculation;


function totalPrice(array) {
  var totalPriceOfProduct;
  var totalPrice = 0;
  for(let element of cart){
      totalPriceOfProduct = element.price * element.quantity;
      totalPrice = totalPrice + totalPriceOfProduct;
  }
  return totalPrice;
  
}
const cart = [
    {name: "laptop", price: 5500, quantity: 1},
    {name: "shirt", price: 100, quantity: 1},
    {name: "watch", price: 1363, quantity: 1},
    {name: "phone", price: 5500, quantity: 1}
];

console.log(totalPrice(cart));
