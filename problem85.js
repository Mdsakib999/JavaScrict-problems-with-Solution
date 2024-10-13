// Check if a String is a Palindrome or not using JS.

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
