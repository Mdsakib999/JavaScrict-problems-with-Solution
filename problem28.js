// return element of an particular range of an array



function getNum(arr) {
    let sum = 0;
 
    for(let i = 0; i < arr.length; i++) {
     if(arr[i] > 5) {
         sum += 1
     }
    }
    return sum;
 }
 
 
 let my_arr = [-1,2,3,4,5,6,-7,8,-9,10];
 
 console.log(getNum(my_arr));