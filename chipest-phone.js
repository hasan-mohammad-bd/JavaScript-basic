//this is array of an object.
const phones = [
    {name: "Samesung s4", price: 35555, camera:18, storage: 32},
    {name:"walton 45", price: 13456, camera:34, storage: 22},
    {name:"xami 45", price: 134456, camera:34, storage: 22},
    {name:"Oppo 45", price: 13456, camera:34, storage: 22},
    {name:"nokia 45", price: 12345, camera:34, storage: 22},
    {name:"htc 45", price: 38378, camera:34, storage: 22}
];

let cheapest = phones[0]
for(const phone of phones) {
    //compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);