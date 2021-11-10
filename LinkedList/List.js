class Node {
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(){
      this.head = null;
    }
    
    append(value){
      if(this.head === null){
        this.head = new Node(value)
        return;
      }
      let curr = this.head;
      while(curr.next !== null){
        curr = curr.next;
      }
      
      curr.next = new Node(value)
    }
    
    print(){
      let curr = this.head;
      while(curr !== null){
        console.log(curr.val)
        curr = curr.next;
      }
    }
    
    contains(value){
      if(this.head === value) return true;
      let curr = this.head;
      while(curr !== null){
        if(curr.val === value){
          return true
        }
        curr = curr.next;
      }
      
      return false;
    }
    
    // 10 -> 20 -> 30 -> 40 -> 
    deleteItem(value){
      if(!this.contains(value)) return 'Item not in the list';
      let curr = this.head;
      if(curr.val === value){
          this.head = curr.next; 
          return `${value} Removed from the list`;
      }
      let prev = null;
      
      while(curr !== null){
        if(curr.val === value){
          prev.next = curr.next;
          return `${value} Removed from the list`;
        }
        prev = curr;
        curr = curr.next;
      }
    }
  }
  
  const linkedlist = new LinkedList()
  linkedlist.append(10);
  linkedlist.append(20);
  linkedlist.append(30);
  linkedlist.append(40);
  linkedlist.print();
  console.log(linkedlist.deleteItem(40))
  console.log('-----------')
  linkedlist.print();
  console.log(linkedlist.contains(100));