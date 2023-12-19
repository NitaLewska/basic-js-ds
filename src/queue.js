const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.items = {}
}
  getUnderlyingList() {
    return this.items
  }

  enqueue(value) {
    if (Object.keys(this.items) < 1) {
      this.items = new ListNode(value)
    } else {
      let currentItem = this.items
      console.log(currentItem)
      while (currentItem.next != null) {
        currentItem = currentItem.next
      }
      currentItem.next = new ListNode(value)
    }
  }


  dequeue() {
    let output = this.items.value
    this.items = this.items.next
    return output
  }
}

module.exports = {
  Queue
};
