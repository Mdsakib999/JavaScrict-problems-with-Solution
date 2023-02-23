// Find the max number?




function max_number(a, b, c) {

    var max;
    if(a > b && a > c) {
        // console.log(a,"is large");
        max = a;
    }
    else if(b > a && b > c) {
        // console.log(b," is large");
        max = b;        //we can return string also [max ="Dela"] 
    
    }
    else{
        max = c;
    }

    return max;
}

let myNumber = max_number(1, 2, 1)

console.log("Large number is", myNumber);




// let a = 9, b = 3, c = 7;
// if(a > b && a > b) {
//     console.log(a,"is large");
// }
// else if(b > a && b > c) {
//     console.log(b," is large");

// }
// else{
//     console.log(c,"is large");

// }





// Another way
/* let a = 9, b = 3, c = 7;
var max_nam = Math.max(a, b, c);
console.log("Large number is",max_nam); */