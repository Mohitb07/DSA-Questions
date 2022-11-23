const Stack = require('./Stack')

const pushItem = (s, element) => {
    if(s.isEmpty()){
        s.push(element)
        return;
    }
    const item = s.peek()
    s.pop()
    pushItem(s, element)
    s.push(item)
}

const pushAtBottom = (stack, element) => {
    pushItem(stack, element)
}

const s = new Stack();
s.push(10)
s.push(20)
s.push(30)
s.push(40)
console.log('before', s.showStack())
pushAtBottom(s, 50)
console.log('after', s.showStack())

