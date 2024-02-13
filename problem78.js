// Q: Write a function to check the given objects are equal or not, and how does it determine the equality of two objects?


function ObjectsEqual(obj1, obj2) {
  return Object.keys(obj1).every(key => obj1[key] === obj2[key]) && Object.keys(obj1).length === Object.keys(obj2).length;
}

const object1 = { a: 1, b: 2 };
const object2 = { b: 2, a: 1 };

console.log(ObjectsEqual(object1, object2));




// Another Way

function ObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  const object1 = { a: 1, b: 2 };
  const object2 = { b: 2, a: 1 };
  
  console.log(ObjectsEqual(object1, object2));
  
