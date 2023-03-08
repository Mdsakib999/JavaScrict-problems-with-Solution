// // Find the second largest element of an array?


function secondLargest ( numbers ) {
        
        let sort_arr = numbers.sort((a, b) => a -b).reverse();
        let second_lrg = sort_arr[1];
        // let second_lrg = sort_arr[sort_arr.length -2];  //ai tai reverse korte hobe na.


    
        return second_lrg;
    }

let Arr = [10,33,5,99,60, 56];

console.log(secondLargest(Arr));




/* 
// ----------------------
let arr = [10,33,5,99,6];

let sort_arr = arr.sort((a, b) => a - b);  //array ar 2 ti element ar modde tulona kora hoi.
console.log(sort_arr);

console.log(arr[arr.length - 2]);

let rev_arr = sort_arr.reverse();
console.log(rev_arr);
 */

