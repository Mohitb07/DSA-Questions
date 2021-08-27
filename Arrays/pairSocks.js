/* John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs
 of socks with matching colors there are.
*/

function sockMerchant(n, ar) {
    var counter = {}
    var pair = 0;
    // [1, 1, 3 ,1 ,2 ,1 ,3 ,3 ,3 ,3]
    for(let i = 0; i<n; i++) {
        if (ar[i] in counter){
            counter[ar[i]]++;
        } else {
            counter[ar[i]] = 1;
        }
    }
    
    for(const item in counter) {
        pair += Math.floor(counter[item]/2);
    }
    
    return pair;

}

const array = [1, 1, 3 ,1 ,2 ,1 ,3 ,3 ,3 ,3]

console.log(sockMerchant(array.length, array))