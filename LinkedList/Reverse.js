class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

function print(head){
    if(head === null){
        return;
    }
    let curr = head;
    while(curr !== null){
        console.log(curr.val)
        curr = curr.next;
    }
}

// Iterative Approach
const reverseLinkedList = (head) => {
    let curr = head;
    if(curr === null){
        return;
    }
    let prev = null;

    while(curr !== null){
        let tempCurr = curr.next;
        curr.next = prev;

        prev = curr
        curr = tempCurr
    }
    return prev;
}

// Recurisve Approach
const reverseLinkedList = (curr, prev = null) => {
    if(curr === null) return prev;
    const next = curr.next;
    curr.next = prev;
    return reverseLinkedList(next, curr)
}

console.log(print(a))
const newHead = reverseLinkedList(a)
console.log('--------')
console.log(print(newHead))