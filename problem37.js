// Total price of shooping cart (object & array)


// var shoopingCart = [
//     {name: "bag", price: 500},
//     {name: "pen", price: 100},
//     {name: "Shirt", price: 800},
//     {name: "watch", price: 1500}
// ]


// function totalCost(product) {

//     let sum = 0;

//     for( var i= 0; i < product.length;i++) {
//         sum += product[i].price;
//     }

//     return sum;
// }


// let expence = totalCost(shoopingCart);

// console.log(expence);




// -------------product with more quantity-------------


var shoopingCart = [
    {name: "bag", price: 500, quantity: 2},
    {name: "pen", price: 100, quantity: 5},
    {name: "Shirt", price: 800, quantity: 3},
    {name: "watch", price: 1500, quantity: 1}
]


function totalCost(product) {

    let sum = 0;

    for( var i= 0; i < product.length; i++) {
        let total_price = product[i].price * product[i].quantity;       //can write extra var for product[i]
        sum += total_price;
    }

    return sum;
}


let expence = totalCost(shoopingCart);

console.log("Total cost of all products",expence);
