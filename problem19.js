// Find the largest element/number of an array?

function max_age(arr) {
    max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if( arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


let age = [22, 55, 45, 97, 50, 15]
let my_age = max_age(age);
console.log('max age is',my_age);

console.log('Index of',age.indexOf(my_age));
