const Stack = require('../Stack/Stack')
// Next Smallest Item 
// Input: N = 5, arr[] = {3, 8, 5, 2, 25}
// Output: 2 5 2 -1 -1

class Solution{
    nextSmallest(arr, n){
        let next;
        for(let i = 0; i < n; i++){
            next = -1
            for(let j = i+1; j < n; j++){
                if(arr[j] < arr[i]){
                    next = arr[j]   
                    break;
                }
            }
            arr[i] = next
        }
        return arr
    }
    optimizedSolution(s, arr, n){
        let result = []
        for(let i = n - 1; i >= 0; i--){
            let curr = arr[i]
            while(s.peek() >= curr){
                s.pop()
            }
            result[i] = s.peek()
            s.push(curr)
        }
        return result;
    }
}

const arr = [3,8,5,2,25]
const stack = new Stack();
stack.push(-1)

const s1 = new Solution()
// console.log(s1.nextSmallest(arr, arr.length))
console.log(s1.optimizedSolution(stack, arr, arr.length))