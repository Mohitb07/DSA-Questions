class Node {
    constructor(data){
        this.data = data || null
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    push(element){
        const node = new Node(element)
        if(!this.head){
            this.head = node;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next
        }
        curr.next = node;
    }

    pop(){
        if(!this.head) return 'Stack Underflow'
        let curr = this.head;
        let prev = this.head;
        while(curr.next){
            prev = curr;
            curr = curr.next;
        }
        const popedNode = curr.data;
        prev.next = null
        return popedNode
    }

    showLinkedList(){
        if(!this.head) return 'Stack is Empty'
        let curr = this.head;
        while(curr.next){
            console.log(`${curr.data} -> ${curr.next.data}`)
            curr = curr.next;
        }
    }

    peek(){
        if(!this.head) return 'Stack is Empty'
        let curr = this.head;
        while(curr.next){
            curr = curr.next
        }
        return curr.data;
    }

    isEmpty(){
        if(!this.head) return true
        return false
    }
}

module.exports = LinkedList;

// const l1 = new LinkedList()
// l1.push(10)
// l1.push(20)
// l1.push(30)
// l1.push(40)
// l1.push(50)
// console.log(l1.pop())
// l1.showLinkedList()
// console.log(l1.peek())
// console.log(l1.isEmpty())