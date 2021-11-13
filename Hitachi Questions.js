// You have been given an integer array A of size N, you need to print the number with value closest to zero. If there are multiple such numbers, print the number with greater value.

function closestToZero(A) {
    let min = Math.abs(A[0]);
    let index = 0;
    for (let i = 0; i < A.length; i++) {
        if (Math.abs(A[i]) < min) {
        min = Math.abs(A[i]);
        index = i;
        }
    }
    return A[index];
    }

    console.log(closestToZero([213,14,15,15,2,51,51,56345]));

// REVERSE A STRING
function reverseString(string){
    let reverse = '';
    for(let i = string.length - 1; i >= 0; i--){
        reverse += string[i]
    }
    return reverse;
}

console.log(reverseString('mohit'));


// Magic array values
function magicArray(arr) {
    const originalArray = [...arr];
    const sortedArray = arr.sort((a, b) => a - b);
    // 0,0,0,0,1,1,2,3,4,4
    let good = 0;
    let bad = 0;
    for(let i = 0; i < sortedArray.length; i++){
        if(originalArray.indexOf(sortedArray[i]) === i){
            good += sortedArray[i]
        }else {
            bad += originalArray[i]
        }
    }
    return good - bad;
}
console.log(magicArray([0,4,0,0,1,3,4,1,0,2]))