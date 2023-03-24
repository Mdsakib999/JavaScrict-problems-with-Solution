// Average element of an array.


/* 

let arr = [75.25, 65, 80, 35.45, 99.50];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum)

let len = arr.length
console.log(len);

let avg = sum / len;

if( avg == Math.round(avg)) {
    console.log(avg)
}
else {

    console.log(avg.toFixed(2))
} */


function average (arrOfMarks){
    //write your code here
   // don't forget to write return
   
     let sum = 0, len, avg, value;
     for(var i = 0; i<arrOfMarks.length; i++) {
       sum += arrOfMarks[i];
     }
     len = arrOfMarks.length;
     avg = sum/ len;
   
     if(avg == Math.round(avg)) {
        // value = console.log(avg);
        value = avg;
     }
     else {
        value = avg.toFixed(2);
     }
   
     return value;
   }


   let arr = [100,100,100,100];

   console.log(average(arr))