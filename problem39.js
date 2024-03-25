// Find the positive element from an array?


var arr = [10, 20, 30, -40, 22,14];
var ps_arr = [];

for(var i =0; i< arr.length; i++) {
  if(arr[i] > 0) {
    ps_arr.push(arr[i]);
  }
  else{
    break;
  }
}
console.log(ps_arr);
