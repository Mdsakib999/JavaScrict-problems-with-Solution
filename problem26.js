// Remove duplicate items from an array?


function duplicate(items) {
    let unique = [];

    for(let i = 0; i <items.length; i++) {
        if(unique.includes(items[i]) == false) {
            unique.push(items[i]);
        }
    }
    return unique;
}


let arr = ["arr", "brt", "crb", "dit", "brt", "crb", "dit"];

let unique_items = duplicate(arr);

console.log(unique_items);