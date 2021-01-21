/* 
*  *note = we store the pointer of our last element, due
*           in languages like JS, with gargabe collector
*           if you don't store the reference, 
*           it will get sweep, from memory.
*
*           it's helpful for instance, when you want to 
*           show data to the user, that was dequeued.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
  
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.last
  }
  enqueue(value){
    const newNode = new Node(value)
    if ( this.length === 0) {
      this.first = newNode
      this.last = newNode
    }
    this.last.next = newNode
    this.last = newNode
    this.length++
    return this
  }
  dequeue(){
    if (this.length === 0) {
      return null
    }
    if (this.first === this.last) {
      this.last = null
    }
    let holdingPointer = this.first // *note
    this.first = this.first.next
    this.length--
  }
}
  
const myQueue = new Queue();
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue)
  
//Joy
//Matt
//Pavel
//Samir
  
  