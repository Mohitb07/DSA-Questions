// Longest Common Prefix 

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
    let result = strs[0]
    for(let i = 1 ; i < strs.length; i++){
        result = findCommonOfTwo(result, strs[i])
    }

    return result;
}

const findCommonOfTwo = (string1, string2) => {
    let result = '';
    for(let i = 0; i < string1.length; i++){
        if(string1[i] === string2[i]) result += string1[i]
        else break;
    }
    return result;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]))