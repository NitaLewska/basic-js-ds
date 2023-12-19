// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  head = null

  root() {
    return this.head ? this.head : null
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    let node = this.head;
    while (node) {
      if (data > node.data && node.right) {
        node = node.right
      } else if (data < node.data && node.left) {
        node = node.left
      } else {
        break
      }
    }
    if (data > node.data) {
      node.right = new Node(data)
    }
    if (data < node.data) {
      node.left = new Node(data)
    }
  }

  has(data) {
    let node = this.head;
    while (node) {
      if (data == node.data) {
        return true;
      }
      if (data > node.data) {
        node = node.right
      } else {
        node = node.left
      }
    }
    return false;
  }

  find(data) {
    let node = this.head;
    while (node) {
      if (data == node.data) {
        return node;
      }
      if (data > node.data) {
        node = node.right
      } else {
        node = node.left
      }
    }
    return null;
  }

  remove(data) {
    let node = this.head
    let parentNode = this.head;
    while (node) {
      if (data == node.data) {
        break
      }
      if (data > node.data) {
        parentNode = node
        node = node.right
      } else {
        parentNode = node
        node = node.left
      }
    }
    if (node.left == null && node.right == null) {
      data > parentNode.data ? parentNode.right = null : parentNode.left = null
      return
    }
    if (node.left == null) {
      data > parentNode.data ? parentNode.right = node.right : parentNode.left = node.right
      return
    }
    if (node.right == null) {
      parentNode.left = node.left
      return
    }
    if (node.right && node.left) {
    let minNode = node.right
      while (minNode) {
        if (!minNode.left) {
          break
        }
        minNode = minNode.left
      }
      let min = minNode.data

      this.remove(minNode.data)
      node.data = min
    }
    return
  }

  min() {
    let node = this.head
    while (node) {
      if (!node.left) {
        return node.data
      }
      node = node.left
    }
    return node.data
  }

  max() {
    let node = this.head
    while (node) {
      if (!node.right) {
        return node.data
      }
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};