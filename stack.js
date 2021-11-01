class Node {
    constructor(val){
        this.val = val
        this.next = null;
    }
}

// Top ->2,1
// 1,2,3,4,

class Stack {
    constructor(){
        this.top = null;
        this.size = null;
    }

    push(value){
        if(this.size === 0){
            this.top = new Node(value)
        }else {

        const pushedValue = new Node(value)
        pushedValue.next = this.top
        this.top = pushedValue

        }
        this.size++;
    }

    pop(){
        if(this.size === 0) return;
        else {
            const popedNode = this.top
            this.top = this.top.next
            this.size--;
            return popedNode.val;
        }

    }   

    getTop(){
        return this.top.val;
    }

    getSize(){
        return this.size;
    }
}

const stack1 = new Stack()

stack1.push(10)
stack1.push(20)
stack1.push(30)
stack1.pop()

console.log(stack1.getTop())
console.log(stack1.getSize())