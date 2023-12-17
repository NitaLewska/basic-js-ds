const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  head = null

  root() {
    return this.head ? this.head : null
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data)
      console.log(this.head)
      return
    }
    let node = this.head
    while (node) {
      if (data > node.data) {
        if (!node.right) {
          node.right = new Node(data)
          return
        }
        node = node.right
      } else if (data < node.data){
         if (!node.left) {
          node.left = new Node(data)
          return
        }
        node = node.left
      }
    }

  }

  has(data) {
    let node = this.head
    while (node) {
      if (data === node.data) {
        return true
      }
      if (data > node.data) {
        node = node.right
      } else if (data < node.data) {
        node = node.left
      }
    }
    return false
  }

  find(data) {
    let node = this.head
    while (node) {
      if (data == node.data) {
        return node
      }
      if (data > node.data) {
        node = node.right
      } else if (data < node.data) {
        node = node.left
      }
    }
    return null
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};