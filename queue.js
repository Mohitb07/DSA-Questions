// Stack implementation

// const queue = []
// Enqueue
// queue.push('a')
// queue.push('b')
// queue.push('c')
// queue.push('d')
// // Dequeue
// console.log(queue)
// queue.shift()
// console.log(queue)

// LinkedList implementation

class QueueNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }
    // this.front -> a -> b -> c
    // a -> b -> c -> 
    enqueue(val){
        const queueNode = new QueueNode(val)
        if(this.size === 0){
            this.front = queueNode;
            this.back = queueNode;
        }else {
            this.back.next = queueNode;
            this.back = queueNode;
        }
        this.size++;
    }

    dequeue(){
        const removedNode = this.front;
        if(this.size === 0){
            return null;
        }
        if(this.size === 1){
            this.back = null;
        }
        this.front = this.front.next;
        this.size--;
        return removedNode.val;
    }

    printQueue(){
        let front = this.front;
        while(front !== null && front !== this.size){
            console.log(front.val)
            front = front.next;
        }
    }

    frontValue(){
        if(this.front){
            return this.front.val;
        }
        return null;
    }

    backValue(){
        if(this.back){
            return this.back.val;
        }
        return null;
    }
}

const q1 = new Queue()
q1.enqueue(10)
// q1.enqueue(20)
// q1.enqueue(30)
q1.printQueue()
console.log('---------')
console.log('removed',q1.dequeue())
q1.printQueue()
console.log('---------')
console.log(q1.frontValue())
console.log(q1.backValue())