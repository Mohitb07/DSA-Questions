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

const array = [1, 2, 3, 4, 5, 6, 7]
console.log(rotation(array, 2, array.length))