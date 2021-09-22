const longestCommonSub = (string1, string2, lenOfStr1, lenOfStr2)  => {
    if(lenOfStr1 === 0 || lenOfStr2 === 0){
        return 0;
    }else if(string1[lenOfStr1 - 1] === string2[lenOfStr2 - 1]){
        return 1 + longestCommonSub(string1, string2, lenOfStr1 - 1, lenOfStr2 - 1)
    }else {
        return Math.max(longestCommonSub(string1, string2, lenOfStr1 - 1, lenOfStr2), longestCommonSub(string1, string2, lenOfStr1, lenOfStr2 - 1))
    }

}

const str1 = 'ABCDGH'
const str2 = 'AEDFHR'
console.log('LCS is', longestCommonSub(str1, str2, str1.length, str2.length))