// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.

;

function findOddSum(arr) {
    let sum =0;
    for(let i =0; i < arr.length; i++) {
        let ele = arr[i];
        // console.log(ele);

        if(ele % 2 !== 0) {
            sum = sum + ele;
        }

    }
    return sum;
}

var n = [5, 7, 8, 10, 45, 30];
console.log("total sum of all Odd number =",findOddSum(n))
