//  Write foo, bar, foobar if divisible by 3 or 5 or both. (Fizz baz)


let i, num = 30;
for(i = 1; i <= num; i++) {

    if( i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBaz")
    }
    
    else if(i % 5 == 0) {
        console.log("baz")
    }
    else if(i % 3 == 0) {
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}



// function FizzBaz(number) {
//     let i, value;
// for(i = 1; i <= number; i++) {

//     if( i % 3 == 0 && i % 5 == 0) {
//         value = console.log("FizzBaz");
//     }
    
//     else if(i % 5 == 0) {
//         value = console.log("baz");
//     }
//     else if(i % 3 == 0) {
//         value = console.log("Fizz");
//     }
//     else{
//         value = console.log(i);
//     }
// }
//     return value;
// }

// console.log(FizzBaz(30));