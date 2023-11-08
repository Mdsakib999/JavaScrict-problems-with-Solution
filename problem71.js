// 



//#Source https://bit.ly/2neWfJ2
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

