const arraySum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j =0; j < arr[i].length; j++){
            sum += arr[i][j]
        }
    }
    return sum;
}

const arraySumFuntionalWay = (arr) => arr.map(item => item.reduce((acc, item) => acc + item, 0)).reduce((acc, item) => acc + item, 0)


const arraySumUsingFlat = (arr) => arr.flat(1).reduce((acc, item) => acc + item, 0)


console.log(arraySumUsingFlat([[1,2,3], [4,5,6], [7,8,9]]))