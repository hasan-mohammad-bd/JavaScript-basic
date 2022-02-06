const products = [
    {name: "iphone 14", price: 70000},
    {name: "samsung 14", price: 60000},
    {name: "dell laptop 14", price: 50000},
    {name: "lenovo yoga laptop 14", price: 55000},
    {name: "Asus 14", price: 35000},
    {name: "smart watch samsung 14", price: 7000},
    {name: "apple watch", price: 20000},
    {name: "one plus", price: 27000}
]

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }//includes search the particular item.
        
    }
    return result;
}
 
const matched = searchProducts(products, "laptop");
console.log(matched);