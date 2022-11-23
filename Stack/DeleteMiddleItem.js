const Stack = require('./Stack')

// Delete middle item from the stack and return the new array

const deleteItem = (stack, count, size) => {
    // Base case
    if(count === Math.floor(size/2)){
        stack.pop();
        return;
    }
    const num = stack.peek();
    stack.pop()
    deleteItem(stack, ++count, size)
    stack.push(num)
}

const deleteMiddleItem = (stack, size) => {
    let count = 0;
    deleteItem(stack, count, size)
}
const s = new Stack();
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
console.log('before', s.showStack())
deleteMiddleItem(s, s.length())
console.log('after', s.showStack())