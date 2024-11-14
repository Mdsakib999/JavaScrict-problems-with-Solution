// Group Anagrams


function groupAnagrams(strs) {
    const map = {};

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map[sortedStr]) map[sortedStr] = [];
        map[sortedStr].push(str);
    }

    return Object.values(map);
}

// Example usage:
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
