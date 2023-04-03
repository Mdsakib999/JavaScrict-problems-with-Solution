// Find the cheapest phone (object inside array)


let phones = [
    {name: "samgsong", camera: 14, storage: "32gb", price: 30000, color: "black"},
    {name: "Oppo", camera: 30, storage: "12gb", price: 20000, color: "blue"},
    {name: "Iphone", camera: 20, storage: "42gb", price: 80000, color: "black"},
    {name: "xiome", camera: 22, storage: "32gb", price: 40000, color: "black"},
    {name: "Nokia", camera: 14, storage: "62gb", price: 35000, color: "black"},

]

function myPhone(phone) {
    /* let cheap = phones[0]
    for(var i =0; i < phones.length; i++) {
        if(phones[i].price < cheap.price) {
            cheap = phones[i];
        }
    }

    return cheap; */


    high = phones[0];

    for(var i =0; i < phones.length; i++) {
        if(phones[i].camera > high.camera) {
            high = phones[i]
        }
    }

    return high;
}


console.log(myPhone(phones));