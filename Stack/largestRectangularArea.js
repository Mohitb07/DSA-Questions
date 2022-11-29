const Stack = require('./Stack')

const nextSmallest = (arr, size) => {
    const s1 = new Stack()
    s1.push(-1)
    const result = []
    for(let i = size - 1; i >= 0; i--){
        let curr = arr[i]
        while(s1.peek() !== -1 && arr[s1.peek()] >= curr){
            s1.pop()
        }
        result[i] = s1.peek()
        s1.push(i)
    }
    return result;
}
const prevSmallest = (arr, size) => {
    const s1 = new Stack()
    s1.push(-1)
    const result = []
    for(let i = 0; i < size; i++){
        let curr = arr[i]
        while(s1.peek() !== -1 && arr[s1.peek()] >= curr){
            s1.pop()
        }   
        result[i] = s1.peek()
        s1.push(i)
    }
    return result;
}

const largestRectangularArea = (arr, size) => {
    let next, prev, area = 0;
    next = nextSmallest(arr, size)
    prev = prevSmallest(arr, size)
    console.log('next', next)
    console.log('prev', prev)
    for(let i = 0; i < size; i++){
        let length = arr[i]
        if(next[i] === -1){
            next[i] = size
        }        
        let breadth = next[i] - prev[i] - 1
        let newArea = length*breadth
        area = Math.max(area, newArea)
    }
    return area
}


const heights = [2,4]
console.log('area', largestRectangularArea(heights, heights.length))