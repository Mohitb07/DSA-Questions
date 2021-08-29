// Find the maximum and minimum element in an array
const maxAndMin = (arr) => {
    if(arr.length <= 0) return 'Insufficient Elements';
    if(arr.length === 1) return {maximum:arr[0],minimum:arr[0]}
    var maximum = arr[0]
    var minimum = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(maximum < arr[i]){
            maximum = arr[i]
        }
        if(minimum > arr[i]){
            minimum = arr[i]
        }
    }
    return {
        maximum,
        minimum
    };
}

const array = [2,2,6,61,6,12,6,7,845,53]
console.log(maxAndMin(array))