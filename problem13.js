// Write a function findSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of all array element.


function findSum(num) {

    let sum = 0;
    for(let i= 0; i < num.length; i++) {
        let element = num[i];
        sum += element;
    }
    return sum;
}


let arr = [5, 7, 8, 10, 45, 30];

console.log("Total sum of all element = ",findSum(arr));
