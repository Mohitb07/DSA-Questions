const Stack = require('./Stack')

const insertAtBottom = (s, item) => {
    if(s.isEmpty()){
        s.push(item)
        return;
    }
    const topElement = s.peek()
    s.pop()
    insertAtBottom(s, item)
    s.push(topElement)
}

const reverseStack = (s) => {
    if(s.isEmpty()) return;
    const item = s.peek()
    s.pop()
    reverseStack(s)
    insertAtBottom(s, item)
}

const s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
reverseStack(s)
console.log(s.showStack())