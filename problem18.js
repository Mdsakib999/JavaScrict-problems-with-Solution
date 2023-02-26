// Find the smallest number among 3?


function min_number(a, b, c) {
    let min =0;
    if( a < b && a < c) {
        return min = a;
    }
    else if( b < a && b < c) {
        return min = b;
    }
    else{
        return min =c;
    }
}

let given_num = min_number(9, 5, 13);           //Math.min() dea o easily kora jai
console.log("Small number is",given_num);


