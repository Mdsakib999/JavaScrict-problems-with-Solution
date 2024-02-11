// Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. 


function all_max(nums) {
    return Array(3).fill(Math.max(nums[0], nums[2]));
}

console.log(all_max([20, 30, 40]));   // Output: [40, 40, 40]
console.log(all_max([-7, -9, 0]));    // Output: [0, 0, 0]
console.log(all_max([12, 10, 3]));    // Output: [12, 12, 12]

