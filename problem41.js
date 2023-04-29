
const products = [
    {id: 1, name: "Xiaome phone", prices: 25000},
    {id: 1, name: "Iphone", prices: 40000},
    {id: 1, name: "Vivo", prices: 15000},
    {id: 1, name: "Nokia phone", prices: 12000},
    {id: 1, name: "Samsung", prices: 15000},
    {id: 1, name: "dell laptop", prices: 60000},
    {id: 1, name: "HP laptop", prices: 50000},
]

function searchItem(products, search) {
    const matched = [];

    for(const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())) {

            matched.push(product);
        }

    }

    return matched;
}

console.log(searchItem(products, "phone"));