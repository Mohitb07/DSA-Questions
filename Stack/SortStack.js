const Stack = require('./Stack')

const insertInSortedForm = (s, item) => {
    if(s.isEmpty() || (!s.isEmpty() && s.peek() < item)){
        s.push(item)
        return;
    }
    const topElement = s.peek()
    s.pop()
    insertInSortedForm(s, item)
    s.push(topElement)
}

const sortStack = (s) => {
    if(s.isEmpty()) return;

    const topElement = s.peek()
    s.pop()
    sortStack(s)
    insertInSortedForm(s, topElement)
}

const s = new Stack()
s.push(40)
s.push(30)
s.push(2)
s.push(10)
s.push(5)
sortStack(s)
console.log(s.showStack())