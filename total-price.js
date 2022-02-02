//Total price of the shopping

const products = [
    {name: "laptop", price: 45554},
    {name: "shirt", price: 500},
    {name: "watch", price: 7363},
    {naem: "phone", price: 55000}
];

let totalPrice = 0;
for(const product of products){
 totalPrice = totalPrice + product.price
    
}

console.log(totalPrice);

//a shopping card price calculation

const cart = [
    {name: "laptop", price: 45554, quantity: 1},
    {name: "shirt", price: 500, quantity: 8},
    {name: "watch", price: 7363, quantity: 3},
    {name: "phone", price: 5500, quantity: 4}
];

let cartTotal = 0;

for (const product of cart) {
    const productTotal = product.price * product.quantity; //here quantity have to multiply with price.
    cartTotal = cartTotal + productTotal;

}
console.log(cartTotal);