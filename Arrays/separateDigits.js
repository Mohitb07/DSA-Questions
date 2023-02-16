const separateDigits = (arr) => {
    const resultArray = [];
    for(let i =0; i < arr.length; i++){
        const stringVersion = arr[i].toString()
        for(let j = 0; j < stringVersion.length; j++){
            resultArray.push(+stringVersion[j])
        }
    }
    return resultArray;
};
const separateDigits2 = (arr) => {
    let resultArray = [];
    for(let i =0; i < arr.length; i++){
        const res = [...arr[i].toString()].map(Number)
        resultArray = resultArray.concat(res)
    }
    return resultArray;
};

console.log(separateDigits2([13, 25, 83, 77]));
console.log(separateDigits2([7, 1, 3, 9]));
