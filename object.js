// object
// object has some caracteristic which determine the object identity
//object has a name

var stduent1 = {
    id: 115, 
    name:"Abir Adnan", 
    marks: 81
}; //property:value

var mobile = {
    color: "black",
    price: 19000,
    screenSize: 5,
    storage: "16gb"
};

var book = {
    title:"start with why",
    author: "simon sinek",
    price: 200,
    pages: 344,
    publisher: "Penguin"
}

//
//declearing an object
var computer = {
    price: 3344,
    storage: "134gb",
    processor: "intel i5",
    color: "yellow"

}

console.log(computer.price); //to find out any specific value, write the object name and its property

var computerPrice = computer.price; //same as above but in a variable.
console.log(computerPrice);

//set a object property value

//there are 3 ways to change a property value

//option-1
computer.price = 22000; //to change any value of an object
console.log(computer);


//option-2
computer["price"] = 34444; //or specify the property like this.
console.log(computer); 

//option-3
var priceProperty = "price"; 
computer[priceProperty] = 7777; //det a varible which value is an property. change the value 
console.log(computer);


var storageProperty = "storage";
computer[storageProperty] = "512gb";

computer["storage"] = "1tb";

computer.storage = "5tb";

console.log(computer);




