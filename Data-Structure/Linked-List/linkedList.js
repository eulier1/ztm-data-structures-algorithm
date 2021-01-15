// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    return this.head
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    return this.head
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    const newNode = new Node(value)
    
    const previousNode = this.traversalToIndex(index - 1)
    const currentNode = previousNode.next

    previousNode.next = newNode
    newNode.next = currentNode

    return this.printList();
  }
  remove(index) {
    // Check Parameters      
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  traversalToIndex(index) {
    const currentNode = this.head
    const counter = 0
    while (counter !== index) {
      currentNode = currentNode.next
      counter++ 
    }
    return currentNode
  }
  reverse() {
    let previous = null
    let current = this.head
    let next = current.next
    while(current) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }
    this.tail = this.head  
    this.head = previous;
    return this.printList();
  }
}
  
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(32);
myLinkedList.prepend(9);
myLinkedList.insert(1, 12)
myLinkedList.reverse()