// Write a function program to filter out the specified values from a specified array.



function pull(arr, ...args) {
  let pulled = [];
  arr.forEach((v, i) => {
    if (!args.includes(v)) {
      pulled.push(v);
    }
  });
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return pulled;
}


let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c'));

let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra2, 'b'));
