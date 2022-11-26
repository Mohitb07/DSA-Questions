// FIRST APPROACH
const rotation = (arr, d, size) => {
    const auxArray = []
    for (let i = 0; i <= d - 1; i++) {
        auxArray.push(arr[i])
    }

    arr.splice(0, d)

    for (let i = 0; i < auxArray.length; i++) {
        arr.push(auxArray[i])
    }

    return arr;
}
//  SECOND APPROACH
const rotateOneByOne = (arr, size) => {
    var temp = 0;
    temp = arr[0]
    for (let i = 0; i < size - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[size - 1] = temp
}

const rotation = (arr, d, size) => {
    for (let i = 0; i < d; i++) {
        rotateOneByOne(arr, size)
    }

    return arr;
}

const reverse = (arr, start, end) => {
    while(start < end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}

// right rotate optimized solution
const rotateRight = (arr, k, n) => {
    k%= arr.length
    reverse(arr, 0, n - 1)
    reverse(arr, 0, k - 1)
    reverse(arr, k, n - 1)
    return arr;
}


const array = [1, 2, 3, 4, 5, 6, 7]
console.log(rotateRight(array, 2, array.length))