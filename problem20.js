// Find the smallest element/number of an array?


let num = [200, 50, 3, 22, 18, 60]

let small = num[0]

for(let i = 0; i < num.length; i++){
    if(num[i] < small) {
        small = num[i];
    }
}

console.log("Smallest number of the array is" ,small);
console.log('index of', num.indexOf(small));






// -------------another way----------

function findingSmallest ( numbers ) {
    //Write your code here
    //Don't forget to return
     let small = numbers[0];
      for( var i = 0; i< numbers.length; i++) {
        if( small > numbers[i]) {
          small = numbers[i];
        }
      }
      return small;
    }