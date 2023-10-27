// JavaScript function that accepts an argument and check the type returns.??


function detectDataType(value) {
  const types = [Function, RegExp, Number, String, Boolean, Object];
  for (const type of types) {
    if (value instanceof type) return type;
  }
  return typeof value;
}

console.log(detectDataType(12));
console.log(detectDataType('w3resource'));
console.log(detectDataType(false));
