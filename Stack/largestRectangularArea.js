const Stack = require('./Stack')

const nextSmallest = (arr, size) => {
    console.log('called nextSmallest')
    const s1 = new Stack()
    s1.push(-1)
    const result = []
    for(let i = size - 1; i >= 0; i--){
        console.log('show stack', i, s1.showStack())
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
    console.log('called prevSmallest')
    const s1 = new Stack()
    s1.push(-1)
    const result = []
    for(let i = 0; i < size; i++){
        console.log('curr', i)
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
    console.log('called')
    let next, prev, area = 0;
    next = nextSmallest(arr, size)
    prev = prevSmallest(arr, size)
    console.log('next', next)
    console.log('prev', prev)
    for(let i = 0; i < size; i++){
        let length = arr[i]
        let breadth = next[i] - prev[i] - 1
        if(next[i] === -1){
            next[i] = size
        }        
        let newArea = length*breadth
        area = Math.max(area, newArea)
    }
    return area
}


const heights = [2,1,5,6,2,3]
console.log('area', largestRectangularArea(heights, heights.length))